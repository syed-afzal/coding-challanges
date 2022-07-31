// const arr = [0, 2, 3, 4, 1, 1, 1, 3, 1];
// const arr = [5,3,4,1,5,8,6,4,2];
// const arr = [4,9,2,3,5,7,8,1,5];
// const arr = [4,8,2,4,5,7,6,1,6];
const arr = [
  [5,3,4],
  [1,5,8],
  [6,4,2]
]

const arr2 = [
  [4,8,2],
  [4,5,7],
  [6,1,6]
]

const arr3 = [
  [4,9,2],
  [3,5,7],
  [8,1,5]
];

const magicSquare = (arr) => {
  const numbers = [...Array(arr.length).keys()];
  let rowSum = (i) => numbers.reduce((acc,val) => acc + arr[i][val],  0);
  let columnSum = (i) => numbers.reduce((acc,val) => acc + arr[val][i],  0);

  // let rowSum = (i) => [0,1,2].reduce((acc,val) => acc + arr[i][val],  0);
  // let columnSum = (i) => [0,1,2].reduce((acc,val) => acc + arr[val][i],  0);

  let maximumSum = 15;
  let cost = 0

  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      let val = maximumSum - Math.max(rowSum(i), columnSum(j));
      let a = arr[i][j];
      arr[i][j] += val;
      cost += Math.abs(a - arr[i][j]);
    }
  }
  return cost
};

console.log(magicSquare(arr3));
const magicSquareMinimumCost = (arr) => {
  const possibleMagicSquares = [[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]];

  let minimumCost = 1000;
  possibleMagicSquares.forEach(magicSquare => {
    let cost = 0;
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        cost += Math.abs(magicSquare[i][j] - arr[i][j]);
      }
    }
    if (cost < minimumCost) {
      minimumCost = cost;
    }
  });
  return minimumCost;
}