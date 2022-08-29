const consecutiveMonthsProfit = (arr) => {
  let profit = 0;
  let maxProfit = 0;
  let start = 0;
  let end = 0;
  let output = {};
  for (let i=0; i<arr.length; i++) {
    profit += arr[i];
    if (profit <= 0){
      end++;
      start = end;
      profit = 0;
    } else {
      maxProfit = Math.max(maxProfit, profit);
      output[maxProfit] = output[maxProfit] ? output[maxProfit] : [start, end];
      end++;
    }
  }
   console.log(output);
}

console.log(consecutiveMonthsProfit([-1, 9, 0, 8, -5, 6, -24]))
console.log(consecutiveMonthsProfit([2, -5, 3, 4, 0, -1, 5, 8, -9, 1 -2, 0]))