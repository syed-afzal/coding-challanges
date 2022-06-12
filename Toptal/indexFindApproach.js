const solutionOptimize = (param) => {
  let result = [];
  for (let i=0; i<param.length; i++) {

    let word = param[i].split('>');
    const idxFirst = result.indexOf(word[0])
    const idxSecond = result.indexOf(word[1])

    if (idxFirst === -1){
      if (idxSecond === -1) result.push(word[0])
      else {
        result.splice(idxSecond, 0, word[0])
      }
    } else {
      if (idxFirst > -1 && idxSecond > -1) {
        if (idxFirst> idxSecond){
          result.splice(idxFirst, 1)
          result.splice(idxSecond, 0, word[0])
        } else {
          result.splice(idxSecond, 1)
          result.splice(idxFirst+1, 0, word[1])
        }
      }
    }

    if (idxSecond === -1) {
      if (idxFirst > -1) {
        result.splice(idxFirst+1, 0, word[1])
      } else result.push(word[1])
    }
  }
  return result.join('');
}

console.log(solutionOptimize(["P>E","E>R","R>U"])); // PERU
console.log(solutionOptimize(["I>N","A>I","P>A","S>P"])); // SPAIN
console.log(solutionOptimize(["I>F", "W>I", "S>W", "F>T"]));
console.log(solutionOptimize(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U"])) // PORTUGAL
// console.log(solutionOptimize(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]))