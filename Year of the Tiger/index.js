const swapLetters = (t) => {
  return {
    t,
    t1: t[1]+t[0]+t[2],
    t2: t[0]+t[2]+t[1],
  }
}

const countNumberOfCandidates = (T, cand) => {
  let count = 0;
  for (let t of T) {
    if (Object.values(swapLetters(t)).includes(cand))
      count++;
  }
  return count;
}

const Solution = (T) => {
  let output = 0
  for (let t of T) {
    for (let cand of Object.values(swapLetters(t))) {
      let sum = countNumberOfCandidates(T, cand);
      output = Math.max(output, sum);
    }
  }
  return output;
}

console.log(Solution(["aab", "cab", "baa", "baa"]))