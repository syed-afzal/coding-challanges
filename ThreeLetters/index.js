const solution = (A, B) => {
  let result = '';
  let length = A+B
  for (let i=0; i< length; i++) {
    const tempCheckA = result + 'a';
    const tempCheckB = result + 'b';
    if (A > 0 && tempCheckA.indexOf('aaa') === -1) {
      console.log('A')
      if ((B - A)  >= 2) {
        result += 'b';
        B--;
      } else {
        result += 'a';
        A--;
      }
    } else if (B > 0 && tempCheckB.indexOf('bbb') === -1) {
      if ((A -B) >= 2) {
        result += 'a';
        A--;
      } else {
        result += 'b';
        B--;
      }
    }
  }
  return result;
};
console.log(solution(1,4))
