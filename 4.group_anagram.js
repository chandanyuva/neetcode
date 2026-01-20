// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
//
// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
//
// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]
//
// Example 3:
// Input: strs = [""]
// Output: [[""]]
//
// Constraints:
// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

let strs = ["act", "pots", "tops", "cat", "stop", "hat"]

// Sorting method
// function groupAnagrams(strs) {
//   let HM = new Map();
//   for (let i = 0; i < strs.length; i++) {
//     // console.log(HM)
//     let sortedStr = strs[i].split("").sort().join();
//     if (HM.has(sortedStr)) {
//       HM.get(sortedStr).push(strs[i]);
//       console.log(HM.get(sortedStr))
//     } else {
//       HM.set(sortedStr, [strs[i]]);
//     }
//     console.log(HM)
//   }
//   return [...HM.values()];
// }
// Hash Table method
function groupAnagrams(strs) {
  const res = {};
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    const key = count.join(',');
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(s);
  }
  return Object.values(res);
}

console.log(groupAnagrams(strs));
