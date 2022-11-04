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
        if((currentZero+currentOne) > count){
          count = currentZero + currentOne;
          lastSameCountIndex = i;
          break;
        }
        if (j <= lastSameCountIndex) break;
        lastSameCountIndex = i;
        count += currentZero + currentOne;
      }
    }
  }

  console.log(count);
}
findMaxLength([0,0,1,0,1,0,0]);
findMaxLength([0,1,0]);
findMaxLength([0,0,0,1,1,1,0]);
findMaxLength([0,0,1,0,0,0,1,1])