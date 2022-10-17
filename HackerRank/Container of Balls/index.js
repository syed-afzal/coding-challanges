const organizeContainers = (container) => {
  const n = container.length;
  const sum = (a,b) => a+b;
  const rowSum = container.map(row => row.reduce(sum, 0));
  const colSum = Array(n).fill(0);
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      colSum[i] += container[j][i];
    }
  }
  rowSum.sort((a, b) => a - b);
  colSum.sort((a, b) => a - b);
  return rowSum.join('') === colSum.join('') ? 'Possible' : 'Impossible';

}
organizeContainers([[1, 1], [1, 1]]);
organizeContainers([[0, 2], [1, 1]]);