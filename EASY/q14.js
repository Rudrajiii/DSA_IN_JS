//!389. Find the Difference
//?Description

//* You are given two strings s and t.
//* String t is generated by random shuffling string s and then add one more letter at a random position.
//* Return the letter that was added to t.

 

//todo Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
//todo Example 2:
// Input: s = "", t = "y"
// Output: "y"

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCodeSumS = 0;
    let charCodeSumT = 0;
  
    for (let char of s) {
      charCodeSumS += char.charCodeAt(0);
    }
  
    for (let char of t) {
      charCodeSumT += char.charCodeAt(0);
    }
  
    const differenceCharCode = charCodeSumT - charCodeSumS;
  
    return String.fromCharCode(differenceCharCode);
  };