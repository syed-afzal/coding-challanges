const numberOfCandles = (candles) => {
  const max = Math.max(...candles);
  return candles.filter(c => c === max).length;
}

console.log(numberOfCandles([1,3,2,3]));