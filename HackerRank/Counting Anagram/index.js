const countingAnagrams = (str) => {
  const words = str.split(' ');
  let count = 0;
  let dictionary = {};
  for(let i=0; i<words.length; i++) {
    let compareWord = words[i].split('').sort().join('');
    if (!dictionary[compareWord]) {
      for(let j=i+1; j<words.length; j++) {
        if(words[i] !== words[j]){
          if(compareWord === words[j].split('').sort().join('')){
            count++;
          }
        }
      }
    }
    dictionary[compareWord] = compareWord;
  }
  return count;
}

// const isAnagram = (str1, str2) => {
//   let str1Arr = str1.split('');
//   let str2Arr = str2.split('');
//   str1Arr.sort();
//   str2Arr.sort();
//   return str1Arr.join('') === str2Arr.join('');
// }
//
console.log(countingAnagrams('aa aa ab gdo dog god'));
console.log(countingAnagrams('aa aa ab ba dog god'));
// console.log(countingAnagrams('aa aa ab gdo dog god'));