// Given an array of integers, return indices of the two numbers such that 
// they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

//   Example:

// Given nums = [2, 7, 11, 15], target = 9,

//   Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];

      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9))

// Given a string, find the length of the longest substring without repeating characters.

//   Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubstring(str) {

}