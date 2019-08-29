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
  let obj = {};
  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (obj[char] === undefined) {
      obj[char] = 1;
      current += char;
      // console.log(current);

      if (current.length > longest.length) {
        longest = current;
        // console.log(longest)
      }
    } else {
      current = "";
      obj = {};
    }
  }

  console.log(longest);
  // console.log(longest.length);
  return longest.length;
}

// longestSubstring("abcabcbb")

console.log(longestSubstring("pwwkew"))

// Reverse a singly linked list.

//   Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both?

function reverseList(head) {
  let pre = null;

  while (head) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }

  return pre;
}

console.log(reverseList(1));

// Given a collection of distinct integers, return all possible permutations.

//   Example:

// Input: [1, 2, 3]
// Output:
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

function permutations(array) {
  if (array.length <= 1) return [array];

  let last = array.pop();
  let perms = permutations(array);
  let all_perms = [];

  for (let i = 0; i < perms.length; i++) {
    let perm = perms[i];

    for (let j = 0; j < perm.length; j++) {
      let newPerm = perm.slice(0, j).concat([last]).concat(perm.slice(j));
      all_perms.push(newPerm);
    }
  }

  return all_perms
}

console.log(permutations([1, 2, 3]))