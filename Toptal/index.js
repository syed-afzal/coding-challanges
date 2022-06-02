const solution = (arr) => {
  arr = arr.map(word => word.replace('>', ''))

  let output = '';

  for (let i=0; i<arr.length; i++){
    if (output === '') {
      output = arr[i];
    } else {
      const firsteLetter = arr[i][0];
      const secondLetter = arr[i][1];

      if (output.includes(firsteLetter)){
        output = output.replace(firsteLetter, arr[i])
      } else if (output.includes(secondLetter)) {
        output = output.replace(secondLetter, arr[i])
      } else {
        output += arr[i]
      }
    }
  }
  return output;
}

console.log(solution(["P>E","E>R","R>U"])); // PERU
console.log(solution(["I>N","A>I","P>A","S>P"])); // SPAIN
// console.log(solution(["I>F", "W>I", "S>W", "F>T"]));
// console.log(solution(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])) // PORTUGAL
// console.log(solution(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]))

