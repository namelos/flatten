import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import flatten from './mod.ts'

Deno.test('flattens array', () => {
  const actual = flatten([1, 2, 3, [4, 5, 6]])
  const expected = [1, 2, 3, 4, 5, 6]
  assertEquals(actual, expected)
})

Deno.test('works with nested array', () => {
  const actual = flatten([1, [2, [3, [4, [5, 6]]]]])
  const expected = [1, 2, 3, 4, 5, 6]
  assertEquals(actual, expected)
})

Deno.test('works with empty array', () => {
  assertEquals([], [])
})

Deno.test('no changes to plain array', () => {
  const actual = flatten([1, 2, 3, 4, 5, 6])
  const expected = [1, 2, 3, 4, 5, 6]
  assertEquals(actual, expected)
})