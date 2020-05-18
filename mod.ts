export default function flatten<T>(arr: NestedArray<T>): Array<T> {
  function reducer(acc: Array<T>, val: T | NestedArray<T>) {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }

  return arr.reduce(reducer, [])
}

export type NestedArray<T> = Array<T | NestedArray<T>>