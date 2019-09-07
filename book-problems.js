// isUnique
// Determine if a string has all unique characters

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let first = str[0];
    let rest = str.slice(1);

    if (rest.includes(first)) return false;
  }

  return true;
}

console.log(isUnique('abcdef')) // true
console.log(isUnique('abcdefa'))// false
console.log(isUnique('aaaa'))   // false 