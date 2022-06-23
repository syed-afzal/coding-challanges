const stairsCase = (n) => {
  for (let i = 1; i <= n; i++) {
    let stairs = "";
    for (let j = n; j > 0; j--) {
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