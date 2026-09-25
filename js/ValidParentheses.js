//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function ValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (let char of s) {
    if (map[char]) {
      const topElement = stack.pop();
      if(topElement !== map[char]){
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length==0;
}

console.log(ValidParentheses("()[]{}")); // Output: true
console.log(ValidParentheses("([)]")); // Output: false
console.log(ValidParentheses("{[]}")); // Output: true
