/*

Given an integer array, right-rotate it by `k` positions, where `k` is a postive integer.

Input: nums[] = [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]

Input: nums[] = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]

Input: nums[] = [1, 2, 3, 4, 5], k = 6
Output: [1, 2, 3, 4, 5]

*/

const rotate = (nums, k) => {
  // if(nums.length === 0) return nums;
  // k = nums.length - k;
  // return nums.splice(k).concat(nums.slice(0,k))

  for (let i=0; i<k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));