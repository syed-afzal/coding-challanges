const findMaximumAndMinimumNumber = (array, startingIndex) => {
  let min = array[startingIndex], max = array[startingIndex], minIndex = startingIndex, maxIndex = startingIndex;
  for (let i = startingIndex+1; i < array.length; i++) {
    let value = array[i]
    if (value < min) {
      min = value;
      minIndex = i;
    }

    if (value >= max) {
      max = value;
      maxIndex = i;
    }
  }
  // console.log(max, array[startingIndex]);
  // console.log(maxIndex, startingIndex);
  if (max === array[startingIndex] && startingIndex + 1 < array.length)
    return findMaximumAndMinimumNumber(array, startingIndex + 1);
  else return [min, max, minIndex, maxIndex];
}

const MaximumSwa2 = (num) => {
  const nums = num.toString().split('');
  const [min, max, minIndex, maxIndex] = findMaximumAndMinimumNumber(nums, 0);
  // console.log(min, max, minIndex, maxIndex);

  if (maxIndex > minIndex) {
    nums[maxIndex] = min;
    nums[minIndex] = max;
  }
  return parseInt(nums.join(''));
}

const MaximumSwap = (num) => {
  const nums = num.toString().split('');
  let max = 0, rightIndex = -1, idxMax = -1;
  let min  = 0, leftIndex = -1;

  for (let i = nums.length -1; i >= 0 ; i--) {
    if (nums[i] > max && i !== 0) {
      max = nums[i];
      idxMax = i;
    } else if (nums[i] < max) {
      leftIndex = i;
      rightIndex = idxMax;
      min = nums[i];
    }
  }
  console.log(min, max, leftIndex, rightIndex);
  if (leftIndex === -1) return num;
  else {
    [nums[rightIndex], nums[leftIndex]] = [nums[leftIndex], nums[rightIndex]];
    return parseInt(nums.join(''));
  }
}
// console.log(MaximumSwap(1993));
// console.log(MaximumSwap(2736));
// console.log(MaximumSwap(9973));
// console.log(MaximumSwap(99901));
// console.log(MaximumSwap(62367));
// console.log(MaximumSwap(98368));

console.log(MaximumSwap(99901));
