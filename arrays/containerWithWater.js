function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let result = 0;

  while (left < right) {
    const containerLength = right - left;
    const area = containerLength * Math.min(heights[left], heights[right]);
    result = Math.max(result, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
