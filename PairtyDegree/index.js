const solution = (N) => {
  let K = 0;
  while((N % Math.pow(2,K+1)) === 0) {
    K++;
  }
  return K;
}

console.log(solution(8));
console.log(solution(24));
// console.log(solution(8));