const biggerIsGreater =(w) => {
  // Write your code here
  w = w.split('');
  let i;
  for (i = w.length-1; i >= 0; i--) {
    if(w[i].localeCompare(w[i-1]) > 0) {
      [w[i], w[i-1]] = [w[i-1], w[i]]
        break;
    }
  }
  let substring = w.slice(i, w.length).sort().join('');
  console.log(substring)
}
biggerIsGreater('abcd');
