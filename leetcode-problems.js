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

// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order and each of their nodes contain a 
// single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.