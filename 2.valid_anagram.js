// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
//
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
//
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false
//
// Constraints:
// s and t consist of lowercase English letters.

const s = "racecar";
const t = "carrace";

function isAnagram(s, t) {
  if (s.length !== t.length) false;
  const storage = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let sCharIndex = s[i].charCodeAt() - 'a'.charCodeAt() + 1;
    let tCharIndex = t[i].charCodeAt() - 'a'.charCodeAt() + 1;
    storage[sCharIndex] += 1;
    storage[tCharIndex] -= 1;
  }
  return storage.every((ele) => ele == 0)
}

console.log(isAnagram(s, t));
