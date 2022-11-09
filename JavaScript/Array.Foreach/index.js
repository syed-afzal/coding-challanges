Array.prototype.myForEach = function (callbackFn) {
  if (this.length > 0){
    for (let i=0; i<this.length; i++) {
      this[i] && callbackFn(this[i]);
    }
  } else {
    return [];
  }
};

let sum = 0;
function myFunction(item) {
  sum += item;
}

[10,9,12,21].myForEach(myFunction);
