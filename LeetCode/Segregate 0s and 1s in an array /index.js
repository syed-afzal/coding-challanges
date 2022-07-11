// https://www.geeksforgeeks.org/segregate-0s-and-1s-in-an-array-by-traversing-array-once/

const solution = (arr) => {
  // let zero = 0;
  // let one = arr.length - 1;
  // while (zero < one) {
  //   if (arr[zero] === 0) {
  //     zero++;
  //   } else {
  //     [arr[zero], arr[one]] = [arr[one], arr[zero]];
  //     one--;
  //   }
  // }
  // return arr;

  const result = [];
  while(arr.length > 0) {
    arr[0] === 0 ? result.unshift(arr.shift()) : result.push(arr.shift());
  }
  return result;
}

console.log(solution([0, 1, 0, 1, 0, 0, 1, 1, 1, 1] ))
// console.log(solution( [0,1,1,1,1,0,1,1,0]  ))