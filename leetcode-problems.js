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