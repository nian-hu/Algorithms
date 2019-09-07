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
  
}


console.log(palindromePerm('tact coa'))  // true ('taco cat')