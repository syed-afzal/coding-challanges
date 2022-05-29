function solution(A) {
  A = A.filter(x=> x>= 1).sort((a,b) => a-b);
  console.log(A)
  let x = 1;
  for(let i=0; i< A.length; i++) {
    if(x < A[i]) {
      return x;
    }
    else {
      x = A[i]+1;
    }
  }
  return x;
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([-2,-1]));
console.log(solution([1,3,1]));
// console.log(solution([1,3,1,4,5,6]));