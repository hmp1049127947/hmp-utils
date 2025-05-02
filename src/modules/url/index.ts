
/**
 * @name 获取url上的参数，返回对象形式
 * @group url工具
 * @param url 要获取参数的url
 * @returns {object} 参数对象
 * @example
 * ```ts
 * getUrlParams('www.baidu.com?a=1&b=2')
 * ```
 */
export const getUrlParams = (url: string) => {
  // 获取URL中的查询参数部分
  const queryString = url.split('?')[1]
  if (!queryString) {
    return {}
  }
  // 将查询参数解析为对象
  const params = new URLSearchParams(queryString)
  const paramsObj: any = {}

  // 遍历URLSearchParams对象，将参数转换为对象
  for (const [key, value] of params) {
    paramsObj[key] = value
  }
  return paramsObj
}

/**
 * @name 对象转url参数
 * @group url工具
 * @param obj 对象
 * @returns {string} '?a=1&b=2'
 * @example
 * ```ts
 * obj2UrlString({
 *  a:1,
 *  b:2
 * })
 * 
 * //输出 ?a=1&b=2
 * ```
 */

export const obj2UrlString = (obj: any):string => {
  if (!obj) {
    return ''
  }
  // 使用 Object.entries 获取对象的键值对数组，然后使用 filter 方法过滤掉值为空字符串的项
  const filteredEntries = Object.entries(obj).filter(
    ([, value]) => value !== '' && value !== undefined && value !== null
  )
  // 使用 map 方法将每个键值对转换成 'key=value' 的形式，然后使用 join 方法将它们连接成一个字符串
  const queryString = filteredEntries
    .map(([key, value]) => `${key.trim()}=${value}`)
    .join('&')

  // 如果 queryString 不为空，则在其前面添加 '?'，否则返回空字符串
  return queryString ? `?${queryString}` : ''
}


/**
 * @name 获取当前url上的某个参数
 * @group url工具
 * @param key 参数的键
 * @returns {string} 参数的值
 */

export const getUrlParamsByKey = (key: string):string => {
  const params = new URLSearchParams(window.location.search)
  return params.get(key) || ''
}