const arr = [0, 2, 3, 4, 1, 1, 1, 3, 1];
// const arr = [5,3,4,1,5,8,6,4,2];
// const arr = [4,9,2,3,5,7,8,1,5];
// const arr = [4,8,2,4,5,7,6,1,6];
const magicSquare = (arr) => {
  let N = 3;

  let rowSum = (i) => [0,1,2].reduce((acc,val) => acc+arr[i*3 + val],  0);
  let columnSum = (i) => [0,1,2].reduce((acc,val) => acc+arr[val*3 + i],  0);

  let maximumSum = 0;

  [0,1,2].forEach(i => {
    maximumSum = Math.max(maximumSum, rowSum(i), columnSum(i))
  });

  for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
      let val = maximumSum - Math.max(rowSum(i), columnSum(j));
      arr[i*3 + j] += val;
    }
  }
  return arr;
};

console.log(magicSquare(arr));