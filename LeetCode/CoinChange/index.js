var coinChange = function(coins, amount) {
  if(amount < 1)
    return 0;

  const arbitaryVal = amount + 1;
  let array = Array(arbitaryVal).fill(arbitaryVal);
  array[0] = 0;

  for(let i=1; i<= amount; i++) {
    for (let coin = 0; coin < coins.length; coin++) {
      let cacheValue = i - coins[coin] ;
      console.log(cacheValue, coins[coin]);
      if(cacheValue >= 0) {
        array[i] = Math.min(array[cacheValue]+1, array[i])
      }
    }
  }
  return array[array.length-1];
};

console.log(coinChange([1, 2, 5], 11));