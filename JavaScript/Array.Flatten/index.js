function flatten(value) {
  let result = [];
  for (let i=0; i<value.length; i++){
    if (Array.isArray(value[i])){
      result = result.concat(flatten(value[i]))
    } else {
      result.push(value[i])
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
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]