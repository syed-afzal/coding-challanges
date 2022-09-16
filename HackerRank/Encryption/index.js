const encryption = (s) => {
  const length = s.length;
  let row = Math.floor(Math.sqrt(length));
  let column = Math.ceil(Math.sqrt(length));
  if((row * column) < length) row++;

  const re = `.{${1},${column}}`;
  const regex = new RegExp(re, 'g');
  let chunks = s.match(regex);

  let result = '';
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      result += chunks[j][i] || '';
    }
    result += ' ';
  }
  return result;
}

console.log(encryption('haveaniceday'));
console.log(encryption('feedthedog'));
console.log(encryption('chillout'));
console.log(encryption('iffactsdontfittotheorychangethefacts'));



















// const encryption = (s) => {
//   const sArr = s.split(' ');
//   const sArrLen = sArr.length;
//   const sLen = s.length;
//   const row = Math.floor(Math.sqrt(sLen));
//   const col = Math.ceil(Math.sqrt(sLen));
//   let result = '';
//   for (let i = 0; i < col; i++) {
//     for (let j = 0; j < row; j++) {
//       const index = j * col + i;
//       if (index < sLen) {
//         result += s[index];
//       }
//     }
//     result += ' ';
//   }
//   return result
// }