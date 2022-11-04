const findMaxLength = (nums) => {
  let count = 0;
  let lastSameCountIndex = -1;
  for (let i=0; i<nums.length; i++) {
    let currentOne = 0;
    let currentZero = 0;
    for (let j=i; j>=0; j--) {
      if (nums[j]) currentOne++;
      else currentZero++;

      if (currentZero === currentOne){
        if (lastSameCountIndex < -1){
          lastSameCountIndex = j;
          count += currentOne + currentZero;
        } else if (lastSameCountIndex )
      }
    }
  }

  console.log(allZeros);
  console.log(allOnes);
}
findMaxLength([0,0,1,0,1,0,0]);