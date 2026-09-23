// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Hash Table Approach: Store each number and its index in a hash map as you iterate. For each number, check if its complement (target - currentNumber) already exists in the hash map.
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
