function hasPairWithSum(nums, k) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(k - num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
