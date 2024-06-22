function threeSum(numbers) {
  numbers.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) break;
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      let sum = numbers[i] + numbers[left] + numbers[right];

      if (sum < 0) {
        right--;
      } else if (sum > 0) {
        left++;
      } else {
        result.push([numbers[i], numbers[left], numbers[right]]);
        left++;
        right--;

        while (left < right && numbers[left] === numbers[left - 1]) {
          left++;
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
