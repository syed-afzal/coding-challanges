const diagonalDifference = (arr) => {
  let leftSum = 0, rightSum = 0;
  for (let i=0; i< arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][(arr.length-1) - i];
  }
  console.log(leftSum, rightSum);

  // const numbers = [...Array(arr.length).keys()];
  // const leftDiagonalSum = numbers.reduce((acc, val) => acc+arr[val][val], 0);
  // const rightDiagonalSum = numbers.reduce((acc, val) => acc+arr[val][(arr.length-1)-val], 0);
  // console.log(Math.abs(leftDiagonalSum - rightDiagonalSum));
}
diagonalDifference([
  [ 11, 2, 4 ],
  [ 4, 5, 6 ],
  [ 10, 8, -12 ]
]);

diagonalDifference([
  [ 34, 2, 4 ],
  [ 78, -5, 6 ],
  [ 22, 8, -12 ]
]);