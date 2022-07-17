const reverseStringExceptString = (str, except) => {
  let ar = str.split(' ');
  let result = '';
  for (let i=0; i<ar.length; i++) {
    if (ar[i] !== except) {
      result += ar[i].split('').reverse().join('') + ' ';
    } else {
      result += ar[i] + ' ';
    }
  }
  return result.trim();
}

console.log(reverseStringExceptString('this is good thing', 'good'));