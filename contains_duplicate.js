// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

nums = [1, 2, 3, 3];

function hasDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

console.log(hasDuplicate(nums));
