function miniMaxSum(arr) {
  // Write your code here
  let accumulatedSum = arr.reduce((acc, val) => acc + val, 0);
  let min = accumulatedSum, max = 0;

  for(const item of arr) {
    const sum = accumulatedSum - item
    min = sum < min ? sum : min;
    max = sum > max ? sum : max
  }
  console.log(min, max)
}
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);