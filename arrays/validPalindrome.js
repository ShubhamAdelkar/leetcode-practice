var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !alphaNum(s[l])) {
      l++;
    }
    while (r > l && !alphaNum(s[r])) {
      r--;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

function alphaNum(c) {
  const charCode = c.charCodeAt(0);
  return (
    (65 <= charCode && charCode <= 90) ||
    (97 <= charCode && charCode <= 122) ||
    (48 <= charCode && charCode <= 57)
  );
}
