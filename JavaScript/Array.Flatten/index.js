function flatten(value) {
  let result =[];
  while(value.length > 0) {
    const val = value.shift()
    if (Array.isArray(val)){
      result.push(...val)
    } else {
      result.push(val);
    }
  }
  return result;
}

// Single-level arrays are unaffected
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]