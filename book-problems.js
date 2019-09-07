// Determine if a string has all unique characters

// function isUnique(str) {
//   for (let i = 0; i < str.length; i++) {
//     let first = str[0];
//     let rest = str.slice(1);

//     if (rest.includes(first)) return false;
//   }

//   return true;
// }

function isUnique(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isUnique('abcdef')) // true
// console.log(isUnique('abcdefa'))// false
// console.log(isUnique('aaaa'))   // false 

// Decide if one string is a permutation of another

// function checkPerms(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let set = new Set();
//   for (let i = 0; i < str1.length; i++) {
//     set.add(str2[i]);
//   }

//   while (str1.length > 0) {
//     if (set.has(str1[0])) {
//       str1 = str1.slice(1);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

function checkPerms(str1, str2) {
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] -= 1;
    }
  }

  return Object.values(obj).every(num => num === 0)
 }

// console.log(checkPerms('dog', 'god')) // true
// console.log(checkPerms('dog', 'dod')) // false
// console.log(checkPerms('dog', 'dogd')) // false

// Replace all spaces in a string with '%20'

function urlify(str) {
  return str.split(" ").join("%20");
}

// console.log(urlify('Mr John Smith')) // Mr%20John%20Smith

// Given a string, check if it's a permutation of a palindrome

function palindromePerm(str) {
  let obj = {};
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  // Use object to count how many times each character appears
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (alpha.includes(char)) {
      if (!obj[char]) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    }
  }

  // Iterate through object and ensure no more than one character
  // has an odd count
  // We need to have an even number of all characters, so 
  // half can be on one side and half can be on the other side.
  // At most ONE character (middle character) can have an odd count.

  let counts = Object.values(obj);
  let odds = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 !== 0) odds += 1;
  }

  return odds > 1 ? false : true;
}


// console.log(palindromePerm('tact coa'))  // true ('taco cat')
// console.log(palindromePerm('tactcoapapa')) // true 
// console.log(palindromePerm('helloheloo')) // false 

// Given two strings, check if they are one edit or zero edits away
// Edit: insertion, removal, replacement

function oneAway(str1, str2) {
  // If the length difference is greater than one, then
  // we know they are 2 insertions/2 deletions away, thus false
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let changes = 0;
  let obj = {};

  // Keep track of all the characters in the first string
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!obj[char]) {
      obj[char] = 1;
    }
  }

  // Check if second string has the same characters as the object
  // by comparing the first character of the second string continuously.
  // If it's not the same, then we know we'd have to make a change there.
  // We slice the string and then continue comparing.

  while (str2.length) {
    if (!obj[str2[0]]) {
      changes += 1;
    }
    str2 = str2.slice(1);
  }

  return changes > 1 ? false : true 
}

console.log(oneAway('pale', 'ple'))  // true 
console.log(oneAway('pales', 'pale')) // true 
console.log(oneAway('pale', 'bale')) // true 
console.log(oneAway('pale', 'bake')) // false 

// Perform basic string compression

function compressString(str) {
  let compressed = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let nextChar = str[i + 1];
    count++;

    if (nextChar !== char || i === str.length - 1) {
      compressed += char + count;
      count = 0;
    }
  }

  // return compressed;
  return compressed.length < str.length ? compressed : str;
}

// console.log(compressString('aabcccccaaa')) // a2b1c5a3

// Given an image represed by an N x N matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// Input:
// [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
// Output:
// [
//     [13, 9, 5, 1],
//     [14, 10, 6, 2],
//     [15, 11, 7, 3]
//     [16, 12, 8, 4]
// ];

function rotateMatrix(matrix) {
  let rotated = [];

  for (let i = 0; i < matrix.length; i++) {
    rotated.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {        // 0
    for (let j = 0; j < matrix[i].length; j++) {   // 0, 1, 2, 3
      console.log([i, j])
      console.log(matrix[i][j])
      rotated[j].unshift(matrix[i][j]);   // matrix[0][1]
      console.log(rotated[j])
    }
  }
  
  return rotated;
}

// console.log(rotateMatrix([[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16]]))

function rotateMatrix2(matrix) {
  let length = matrix.length;

  // swap all the rows
  // so now it looks like this
  // [[13, 14, 15, 16],
  //   [9, 10, 11, 12],
  //   [5, 6, 7, 8],
  //   [1, 2, 3, 4]]
  for (let i = 0; i < length / 2; i++) {
    let j = length - 1 - i;
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]]
  }

  //swap diagonals
  // so now it looks like this
  // [[13, 9, 5, 1],
  //   [14, 10, 6, 2],
  //   [15, 11, 7, 3],
  //   [16, 12, 8, 4]]

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}

console.log(rotateMatrix2([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))