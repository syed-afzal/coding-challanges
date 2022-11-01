const maxSubArraySum = (arr) => {
  const isAnyNegative = arr.find(o => o < 0);
  if (!isAnyNegative)
    return arr.reduce((acc,val) => acc+val,  0);
  const isAnyPossitive = arr.find(o => o > 0);
    if (!isAnyPossitive)
      return 0;

  let maxSum = 0;
  let tempSum = 0;
  let startIndex = 0, endIndex = 0;
  for (let i=0; i<arr.length; i++) {
    tempSum += arr[i];
    if (tempSum > maxSum){
      maxSum = tempSum;
    }

    if (tempSum <= 0){
      tempSum = 0
    }
  }
  return maxSum;
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]))
console.log(maxSubArraySum([4, 1, 1, 5]))
console.log(maxSubArraySum([-2, -3, -3]))