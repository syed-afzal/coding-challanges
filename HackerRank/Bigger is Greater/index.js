const biggerIsGreater =(w) => {
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
  if (!isFound)
    console.log('no answer');
  else {
    let substring = w.slice(i+1, w.length).sort().join('');
    console.log(w.slice(0, i+1).join('') + substring);
  }
}
biggerIsGreater('abcd');
biggerIsGreater('dkhc');
biggerIsGreater('dcba');
