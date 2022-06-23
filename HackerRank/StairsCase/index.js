const stairsCase = (n) => {
  let height = n-1;
  for (let i = 0; i < n; i++) {
    let stairs = "";
    for (let j = 0; j < n; j++) {
      if (j < height) {
        stairs += " ";
      } else {
        stairs += "#";
      }
    }
    height -= 1;
    console.log(stairs);
  }
}

stairsCase(6);