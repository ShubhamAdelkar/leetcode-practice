function productOfArray(array) {
  let result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < array.length; i++) {
    result[i] = prefix;
    prefix *= array[i];
  }

  for (let i = array.length - 2; i >= 0; i--) {
    postfix *= array[i + 1];
    result[i] *= postfix;
  }
  return result;
}

console.log(productOfArray([0, 1, 2, 11]));
