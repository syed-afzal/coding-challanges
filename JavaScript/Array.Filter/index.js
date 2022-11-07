Array.prototype.myFilter = function (callbackFn) {
  if (this.length > 0) {
    const result = [];
    for (let i=0; i<this.length; i++){
      if (callbackFn(this[i])) {
        result.push(this[i])
      }
    }
    return result;
  } else {
    return [];
  }
};

const res = [1,2,3,4,5,6,7,8,9,10].myFilter((o, i) => o%2 === 0);
console.log(res);