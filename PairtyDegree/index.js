const solution = (N) => {
  let K = 0;
  while((N % Math.pow(2,K+1)) === 0) {
    K++;
  }
  return K;
}