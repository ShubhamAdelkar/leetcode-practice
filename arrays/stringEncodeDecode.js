function encode(strs) {
  let result;
  for (let s of strs) {
    result += `${s.length}#${s}`;
  }
  return result;
}

function decode(str) {
  let result = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j), 10);
    i = j + 1;
    j = i + length;
    result.push(str.substring(i, j));
    i = j;
  }
  return result;
}

/**
 
A. Encode function
The encode function takes a list of strings strs as input and returns a single string containing the encoded representation of the input strings. Here's a breakdown of 

how it works:

2. Initialization:
An empty string result is declared to store the encoded string.

3. Iterating through the input strings:
The function iterates through each string s in the input list strs using a for loop.

4. Encoding each string:
Inside the loop, for each string s, the following steps are performed:
The length of the current string s is obtained using len(s).
The length is then converted to a string using string conversion.
A '#' symbol is appended to the string representation of the length.
The original string s is appended to the encoded string.
All the above steps are achieved using f-string formatting, which efficiently combines string literals and expressions.

5.Returning the encoded string:
After iterating through all the strings, the result string containing the encoded representation of all the input strings is returned.

B. Decode function
The decode function takes an encoded string str as input and returns a list of strings containing the decoded representation. Here's a breakdown of how it works:

1. Initialization:
An empty list result is declared to store the decoded strings.
A variable i is initialized to 0 to keep track of the current index in the encoded string.

3. Iterating through the encoded string:
The function uses a while loop to iterate through the characters in the encoded string str as long as i is less than the length of the string.

4. Finding the length of the next encoded string:
Inside the loop, another variable j is initialized to the current index i.
The loop iterates through the characters in the encoded string starting from the current index i until it encounters a '#' symbol. The index of the '#' symbol is stored in the variable j.
The substring between the current index i (inclusive) and j (exclusive) is extracted using str[i:j]. This substring represents the length of the next encoded string.
The extracted substring is converted from a string to an integer using int(str[i:j]).

5.Extracting the encoded string:
The value of i is incremented by 1 to move past the '#' symbol.
The length obtained in the previous step is used to extract the next encoded string from the original encoded string str. This is done using str[i:i + length].
The extracted encoded string is appended to the result list.

6. Updating the index:
The value of i is updated to i + length to move to the next encoded string in the original encoded string.

7. Returning the decoded strings:
After iterating through the entire encoded string, the result list containing the decoded strings is returned.
 
 **/
