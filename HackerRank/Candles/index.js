const numberOfCandles = (candles) => {
  const max = Math.max(...candles);
  let count = candles.filter(c => c === max);
  return count;
}

