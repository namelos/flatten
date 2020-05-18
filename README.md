# Flatten

![CI](https://github.com/namelos/flatten/workflows/CI/badge.svg)

Recursively flatten arrays for Deno.

## Usage

```ts
import flatten from 'https://deno.land/x/array-flatten/mod.ts'

flatten([1, [2, [3, [4, [5, 6]]]]]) // => [1, 2, 3, 4, 5, 6]
```
