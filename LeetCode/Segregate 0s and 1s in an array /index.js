// https://www.geeksforgeeks.org/segregate-0s-and-1s-in-an-array-by-traversing-array-once/

const solution = (arr) => {
  const result = [];
  while(arr.length > 0) {
    arr[0] === 0 ? result.unshift(arr.shift()) : result.push(arr.shift());
  }
  return result;
}

console.log(solution([0, 1, 0, 1, 0, 0, 1, 1, 1, 0] ))
console.log(solution( [0,1,1,1,1,0,1,1,0]  ))