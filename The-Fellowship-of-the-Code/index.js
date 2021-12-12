const isAlphabetNotOrdered = (a,b) => a > b;

const swapLetters = (S, a, b) => {
  const searchVal = new RegExp(a+b)
  return S.replace(searchVal, b+a)
};

const solution = (S, K) => {
  let i = 0;
  let swapCounter = 0;
  for(i; i<S.length; i++) {
    let j = i+1;
    if (swapCounter < K) {
      if(isAlphabetNotOrdered(S[i], S[j])) {
        S = swapLetters(S, S[i], S[j])
        swapCounter++;
        i=-1;
      }
    } else {
      break;
    }
  }
  return S;
}