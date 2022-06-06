function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const length = apples.length > oranges.length ? apples.length : oranges.length;
  let appleCount = 0;
  let orangeCount = 0;
  let val = 0;
  for(let i=0; i<length; i++) {
    val = 0;
    if(apples[i]) {
      val = a + apples[i];
      appleCount = (val >= s && val <= t) ? (appleCount+1) : appleCount
    }
    if(oranges[i]) {
      val = b + oranges[i];
      orangeCount = (val >= s && val <= t) ? (orangeCount+1) : orangeCount
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
countApplesAndOranges(7,11,1,5,[2], [-2])