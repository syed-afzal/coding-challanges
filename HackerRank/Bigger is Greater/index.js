const biggerIsGreater =(w) => {
  // Write your code here
  // let isFound = false;
  // w = w.split('');
  // let i;
  // let currentItemIndex = w.length -1;
  // while(!isFound && currentItemIndex >= 0) {
  //   for (i = currentItemIndex -1; i >= 0; i--) {
  //     if(w[currentItemIndex].localeCompare(w[i]) > 0) {
  //       isFound = true;
  //       [w[currentItemIndex], w[i]] = [w[i], w[currentItemIndex]]
  //       break;
  //     }
  //   }
  //   currentItemIndex = isFound ? currentItemIndex : currentItemIndex - 1;
  // }
  // if (!isFound)
  //   console.log('no answer');
  // else {
  //   let substring = w.slice(i+1).sort().join('');
  //   console.log(w.slice(0, i+1).join('') + substring);
  // }

  w = w.split('');
  let i;
  let comparingCharIndex = w.length-1;
  let notFound = true;
  while(notFound && comparingCharIndex > 0) {
    for(i=comparingCharIndex; i>0; i--) {
      if(w[comparingCharIndex].localeCompare(w[i-1]) > 0){
        notFound = false;
        [w[comparingCharIndex], w[i-1]] = [w[i-1], w[comparingCharIndex]]
        break;
      }
    }
    comparingCharIndex = notFound ? comparingCharIndex - 1 : comparingCharIndex;
  }

  if(notFound)
    return 'no answer';
  else {
    let subString = w.slice(i).sort().join('');
    return w.slice(0,i).join('') + subString;
  }
}


console.log(biggerIsGreater('hefg'));
console.log(biggerIsGreater('dkhc'));
console.log(biggerIsGreater('dcba'));
