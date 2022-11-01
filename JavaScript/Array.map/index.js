Array.prototype.myMap = function (callbackFn) {
  const results = [];
  if (this.length > 0){
    for (let i=0; i<this.length; i++) {
      results.push(callbackFn(this[i]));
    }
    return results;
  } else {
    return [];
  }
};

const res = [].myMap((o, i) => o*2);
console.log(res);

console.log('log',[].map(obj => console.log(obj)))

// Array.prototype.myFilter = function (callbackFn) {
//   const results = [];
//   if (this.length > 0) {
//     for (let i=0; i<this.length; i++) {
//       console.log(this[i])
//       if (callbackFn(this[i])){
//         results.push(this[i]);
//       }
//     }
//     return results;
//   } else {
//     return [];
//   }
// }
//
// console.log([1,2,3,5].myFilter(o => o%2 === 0));