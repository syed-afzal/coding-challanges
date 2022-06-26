function biggerIsGreater(w) {
  // Write your code here
  let sorted = w.split('').sort();
  let result = sorted.slice();
  for (let i=w.length-1; i>0; i--) {
    if(w[i].localeCompare(w[i-1]) > 0) {
      [result[i], result[i-1]] = [result[i-1], result[i]]
      if(result.join('').localeCompare(w) > 0) {
        break;
        return
      }
    }
  }
  console.log(result);
}