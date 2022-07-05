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


// console.log(biggerIsGreater('hefg'));
// console.log(biggerIsGreater('dkhc'));
// console.log(biggerIsGreater('zyyyvvvvvuttsrqqokjjheedccb'));
// console.log(biggerIsGreater('vvvygfabrsqeitgelpxwodhdfyypoyufxnecmrtkbzbhzfbtvnffcmikqoosfzoozssonomkgmtdqfecrqtps'));

const biggerIsGreaterTwo = (w) => {
  // Write your code here
  w = w.split('');
  let endIndex;

  for(endIndex = w.length - 1; endIndex > 0; endIndex--) {
    if(w[endIndex].localeCompare(w[endIndex -1]) > 0) {
      break;
    }
  }
  if(endIndex === 0) {
    return 'no answer'
  } else {
    let firstSmallChar = w[endIndex-1];
    let nextSmallChar = endIndex;

    for(let startIndex = endIndex + 1; startIndex < w.length; startIndex++) {
      if(w[startIndex] > firstSmallChar && w[startIndex] < w[nextSmallChar]) {
        nextSmallChar = startIndex;
      }
    }
    [w[endIndex-1] , w[nextSmallChar]] = [w[nextSmallChar] , w[endIndex - 1]];

    let subString =  w.slice(endIndex).sort().join('');
    return w.slice(0, endIndex).join('') + subString;
  }
}

console.log(biggerIsGreaterTwo('ecdigf'));
console.log(biggerIsGreater('hefg'));
console.log(biggerIsGreater('dkhc'));
console.log(biggerIsGreater('zyyyvvvvvuttsrqqokjjheedccb'));
