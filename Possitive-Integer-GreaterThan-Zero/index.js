function solution(A) {
  A = A.filter(x=> x>= 1).sort((a,b) => a-b);

  let x = 1;
  console.log(A);
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

console.log(solution([1,3,6,4,1,2]));