function intersection(nums1, nums2) {
  const newSet = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      newSet.add(nums1[i]);
    }
  }
  return Array.from(newSet);
}

console.log(intersection([1, 2, 2, 1], [2, 2]));

// sets use for storing unique values, no matter what data type you want to store.