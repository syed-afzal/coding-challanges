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