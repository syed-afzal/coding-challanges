function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  const length = arr.length;
  for(let i=0; i<length; i++) {
    arr[i] > 0 ? positive++ : arr[i] < 0 ? negative++ : '';
  }
  console.log((positive/ length).toFixed(6))
  console.log((negative/length).toFixed(6))
  console.log(((length - (positive+negative))/length).toFixed(6))
}

plusMinus([-4,3,-9,0,4,1])
// plusMinus([1,1,0,-1,-1])
