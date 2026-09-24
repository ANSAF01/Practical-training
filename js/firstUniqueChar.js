// Problem: Given a string, find the first non-repeating character and return its i. If it doesn't exist, return -1.

// Hash Table Approach: Use a hash map (or frequency counter object) to count the occurrences of every character first, then iterate through the string again to find the first character with a count of 1.

function firstUniqueChar(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return [str[i],i];
    }
    return -1;
}

}

console.log(firstUniqueChar("Ansf"));
console.log(firstUniqueChar("leetcode")); 
console.log(firstUniqueChar("loveleetcode")); 