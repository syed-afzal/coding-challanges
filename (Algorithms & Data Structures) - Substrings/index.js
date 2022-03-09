const subStrings = (str) => {
  const result = [];
  for (let i = 1; i <= str.length; i++) {
    let k = 0;
    console.log(str.length - i)
    for (let j = 0 ; j <= str.length - i; j++) {
      result.push(str.substring(k, i+j));
      k++;
    }
  }
  return result;
};
console.log(subStrings('bgh'));