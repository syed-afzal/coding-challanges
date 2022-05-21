function sum(arr) {
  return arr.reduce((a,b) => a+b, 0)
}

function sort(arr) {
  return arr.sort().reverse();
}

function solution(P, S) {
  let peopleSum = sum(P);
  let carSort = sort(S);
  let idx = 0;
  while(peopleSum > 0) {
    peopleSum -= carSort[idx];
    idx += 1;
  }
  return idx;
}