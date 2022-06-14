const swapLetters = (t) => {
  return {
    t,
    t1: t[1]+t[0]+t[2],
    t2: t[0]+t[2]+t[1],
  }
}

const Solution = (T) => {
  let output = 0
  for (let t of T) {
    for (let cand of Object.values(swapLetters(t))) {
    }
  }
}

console.log(Solution(["aab", "cab", "baa", "baa"]))