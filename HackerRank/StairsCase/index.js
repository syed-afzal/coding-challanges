function stairsCase(n) {
  for (let i = 1; i <= n; i++) {
    let stairs = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
    console.log(stairs);
  }
}

stairsCase(6);