const numberOfCandles = (candles) => {
  const max = Math.max(...candles);
  return candles.filter(c => c === max).length;
}

console.log(numberOfCandles([1,3,2,3]));
console.log(numberOfCandles([4,4,3,1]));
console.log(numberOfCandles([4,4,3,1,10,10,2,3,5,6,7,10,10,10,3,4,5,7]));