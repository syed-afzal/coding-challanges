const joined = (word, result) => {
  let currentWordIdx = result.indexOf(word[0]);
  if (currentWordIdx === -1){
    result.push(word[0])
  } else {
    let nextWordIdx = result.indexOf(word[1]);
    if (nextWordIdx !== -1) {
      result = [word[0], ...result]
    }
  }
}

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

console.log(solution(["P>E","E>R","R>U"])); // PERU
console.log(solution(["I>N","A>I","P>A","S>P"])); // SPAIN
console.log(solution(["I>F", "W>I", "S>W", "F>T"]));
console.log(solution(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])) // PORTUGAL
console.log(solution(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]))

