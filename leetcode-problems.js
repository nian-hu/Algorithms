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

// console.log(twoSum([2, 7, 11, 15], 9))

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

  // console.log(longest);
  // console.log(longest.length);
  return longest.length;
}

// longestSubstring("abcabcbb")

// console.log(longestSubstring("pwwkew"))

// Reverse a singly linked list.

//   Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both?

function reverseList(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// console.log(reverseList(1));

function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

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

// console.log(permutations([1, 2, 3]))

// Returns all subsets of an array
// do this recursively

//     Example:

// Input: nums = [1, 2, 3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1, 2, 3],
//   [1, 3],
//   [2, 3],
//   [1, 2],
//   []
// ]

// function subsets(array) {
//   if (array.length === 0) return [[]];

//   let last = array.pop();
//   let prevArray = subsets(array);
//   let subsets = [];

//   for (let i = 0; i < prevArray.length; i++) {
//     let subarray = prevArray[i];
//     subsets.push(subarray.concat([last]));
//   }

//   return subsets.concat(prevArray);
// }

// console.log(subsets([1, 2, 3]))

// Write a function to find the longest common prefix string amongst
//  an array of strings.

// If there is no common prefix, return an empty string "".

//   Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs) {
  for (let i = 0; i < strs[0].length; i++) {  
    let char = strs[0][i]                       //f
    for (let j = 0; j < strs.length; j++) {  
      let str = strs[j];                        //flower
      if (str[i] !== char) {                    
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))

// Reverse a singly linked list.

//   Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both ?

function reverseList(head) {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

// console.log(reverseList(1))

// Remove nth node from end of list
// Given a linked list, remove the nth node from end
// return its head

function removeNthNode(head, n) {
  let nodeToReturn = head;

  // Have two pointers, one that is n ahead of the other

  let pointer1 = head;
  let pointer2 = head;

  // Move pointer2 to be n ahead

  for (let i = 0; i < n; i++) {
    pointer2 = pointer2.next;
  }

  // If pointer2 doesn't exist, that means we must remove 
  // the head of the list
   
  if (!pointer2) {
    return nodeToReturn.next;
  }

  // Move both pointers until pointer2 reaches the end
  // At this point, we know pointer1 is at the right node

  while (pointer2.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  // Save the node two places ahead of pointer1 
  // Effectively delete the node ahead of pointer1
  // by reassigning the next pointer to the NEXT next one

  pointer1.next = pointer1.next.next;

  return nodeToReturn;
}

// Given an integer array nums, find the contiguous 
// subarray(containing at least one number) which 
// has the largest sum and return its sum.

// function maxSubarray(nums) {
//   let current = nums[0];
//   let largest = nums[0];
//   // console.log(`largest: ${largest}`);

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       let subArr = nums.slice(i, j);
//       // console.log(subArr);
//       current = subArr.reduce((a, b) => a + b, 0)
//       // console.log(current);
//       if (current > largest) {
//         largest = current;
//       }
//       current = nums[0];
//     }
//   }

//   return largest;
// }

function maxSubarray(nums) {
  let current = nums[0];
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (current < 0) {
      current = nums[i];
    } else {
      current += nums[i];
    }

    largest = Math.max(largest, current)
  }

  return largest;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubarray([1])) // 1
console.log(maxSubarray([-1])) // -1