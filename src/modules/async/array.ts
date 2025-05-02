export function* range(
  startOrLength: number,
  end: number,
  valueOrMapper = (i: number) => i,
  step = 1,
) {
  const mapper =
    typeof valueOrMapper === 'function' ? valueOrMapper : () => valueOrMapper
  const start = end ? startOrLength : 0
  const final = end ?? startOrLength
  for (let i = start; i <= final; i += step) {
    yield mapper(i)
    if (i + step > final) break
  }
}
export const list = (
  startOrLength: number,
  end: number,
  valueOrMapper?: any,
  step?: number,
) => {
  return Array.from(range(startOrLength, end, valueOrMapper, step))
}

export const sort = (array: any[], getter: any, desc = false) => {
  if (!array) return []
  const asc = (a: any, b: any) => getter(a) - getter(b)
  const dsc = (a: any, b: any) => getter(b) - getter(a)
  return array.slice().sort(desc === true ? dsc : asc)
}

export const fork = (list2: any[], condition: any) => {
  if (!list2) return [[], []]
  return list2.reduce(
    (acc, item) => {
      const [a, b] = acc
      if (condition(item)) {
        return [[...a, item], b]
      } else {
        return [a, [...b, item]]
      }
    },
    [[], []],
  )
}
