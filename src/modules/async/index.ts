import * as array from './array'

function isPromise(value: any) {
  return value instanceof Promise
}

/**
 * @name 睡眠函数
 * @group 异步
 * @example
 * ```ts
 * sleep(3000)
 * ```
 */
export const sleep = (milliseconds: number) => {
  return new Promise((res) => setTimeout(res, milliseconds))
}

/**
 * @name 帮你给异步操作加一层 try catch，有利于操作的兜底以及错误的捕获
 * @group 异步
 * @param func promise函数
 * @returns [err,result] err 为错误信息，result 为结果
 * @example
 * ```ts
 * const [err,result]=await tryIt(apis.getUserInfo)(userId)
 * ```
 */
export const tryIt = (func: any) => {
  return (...args: any) => {
    try {
      const result = func(...args)
      if (isPromise(result)) {
        return result
          .then((value: any) => [void 0, value])
          .catch((err: any) => [err, void 0])
      }
      return [void 0, result]
    } catch (err) {
      return [err, void 0]
    }
  }
}


/**
 * @name 并发：这个函数会限制同时进行的异步操作的数量，以避免同时启动过多的异步任务。
 * @group 异步
 * @param limit 并发的数量
 * @param array$1 需要被异步处理的元素数组
 * @param func 转换函数（将数组中的每个元素转换为一个异步操作）
 * @returns 返回一个数组，该数组包含了按原数组顺序排序的所有成功的结果。
 * @example
 * ```ts
 * const users await parallel(3,[1,2,3,4,5,6,7,8,9],async (userId)=>{
 *  return await api.users.find(userId)
 * })
 * ```
 */
export const parallel = async (limit: number, array$1: any[], func: any) => {
  const work = array$1.map((item, index) => ({
    index,
    item,
  }))
  const processor = async (res: any) => {
    const results2:any[] = []
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const next = work.pop()
      if (!next) return res(results2)
      const [error, result] = await tryIt(func)(next.item)
      results2.push({
        error,
        result,
        index: next.index,
      })
    }
  }
  const queues = array.list(1, limit).map(() => new Promise(processor))
  const itemResults = await Promise.all(queues)
  const [errors, results] = array.fork(
    array.sort(itemResults.flat(), (r: any) => r.index),
    (x: any) => !!x.error,
  )
  if (errors.length > 0) {
    throw new Error(errors.map((error: any) => error.error))
  }
  return results.map((r: any) => r.result)
}

/**
 * @name 重试函数：允许您运行异步函数并在失败时自动重试。 给定要运行的异步函数、可选的最大重试次数 (r) 以及重试之间的可选延迟毫秒数 (d)，
 * 将调用给定的异步函数，重试 r 次，并在重试之间等待 d 毫秒。
 * @group 异步
 * @example
 * ```ts
 * const res = await retry(
 *     {
 *       times: 8,
 *       delay: 1200,
 *     },
 *     async () => {
 *       const { data } = await mattingApi.getSegmentResult({
 *         requestId,
 *       })
 *       if (data.status === 1) {
 *         return Promise.resolve(data)
 *       }else{
 *         return Promise.reject(new Error('正在处理中'))
 *       }
 *     },
 *   )
 * ```
 */
export const retry = async (options: any, func: any) => {
  const times = options?.times ?? 3
  const delay = options?.delay
  const backoff = options?.backoff ?? null
  for (const i of array.range(1, times)) {
    const [err, result] = await tryIt(func)((err2: any) => {
      throw { _exited: err2 }
    })
    if (!err) return result
    if (err._exited) throw err._exited
    if (i === times) throw err
    if (delay) await sleep(delay)
    if (backoff) await sleep(backoff(i))
  }
  return void 0
}
