function concatArray(nums) {
  const n = nums.length;
  const ans = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
  }

  for (let i = n; i < 2 * n; i++) {
    ans[i] = nums[i - n];
  }

  return ans;
}

console.log(concatArray([1, 2, 3, 4]));
