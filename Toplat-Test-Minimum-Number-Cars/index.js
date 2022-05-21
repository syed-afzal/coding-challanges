const sum = (arr) => {
  return arr.reduce((a,b) => a+b, 0)
}

const sort = (arr) => {
  return arr.sort().reverse();
}

const solution = (P, S) => {
  let peopleSum = sum(P);
  let carSort = sort(S);
  let idx = 0;
  while(peopleSum > 0) {
    peopleSum -= carSort[idx];
    idx += 1;
  }
  return idx;
}

console.log(solution([2, 4, 6, 8, 10], [10, 8, 6, 4, 2]));