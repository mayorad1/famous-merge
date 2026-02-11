function hasPairWithSum(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        return true;
      }
    }
  }
  return false;
}

// Example
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
