const biggerIsGreater =(w) => {
  let orignal = w;
  // Write your code here
  let isFound = false;
  w = w.split('');
  let i;
  let currentItemIndex = w.length -1;
  while(!isFound && currentItemIndex >= 0) {
    for (i = currentItemIndex -1; i >= 0; i--) {
      if(w[currentItemIndex].localeCompare(w[i]) > 0) {
        isFound = true;
        [w[currentItemIndex], w[i]] = [w[i], w[currentItemIndex]]
        break;
      }
    }
    currentItemIndex = isFound ? currentItemIndex : currentItemIndex - 1;
  }
  let substring = w.slice(i+1, w.length).sort().join('');
}
biggerIsGreater('abcd');
biggerIsGreater('dkhc');
