const solution = (arr) => {
  let result = [];
  let word= '';
  for (let i=0; i<arr.length; i++) {
    word = arr[i].split('>');
    joined(word, result);
  }
  result = [...result, word[1]]
  return result.join('');
}

console.log(solution(["P>E","E>R","R>U"]));
Uconsole.log(solution(["I>N","A>I","P>A","S>P"]));
console.log(solution(["I>F", "W>I", "S>W", "F>T"]));
console.log(solution(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])) // PORTUGAL
console.log(solution(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]))

