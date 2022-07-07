function isValidSubsequence(array, sequence) {
  // Write your code here.
  let subIndex = 0;
  for (let index = 0; index < array.length; index++) {
    if(sequence[subIndex] === array[index]) {
      subIndex++;
    }
  }
  return subIndex === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));