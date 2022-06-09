const numberOfCandles = (candles) => {
  const max = Math.max(...candles);
  let count = candles.filter(c => c === max);
  return count;
}

console.log(numberOfCandles([1,3,2,3]));