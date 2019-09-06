//w2d3_pset
//1_peak_finder.js

/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

// time: 2:46
// rating: very straightforward

// function peakFinder(array) {
//   var newArr = [];
//
//   for (var i = 0; i < array.length; i++) {
//     var ele = array[i];
//     var rightEle = array[i + 1];
//     var leftEle = array[i - 1]
//
//     if (i === 0 && ele > rightEle) {
//       newArr.push(i);
//     } else if (i === array.length - 1 && ele > leftEle) {
//       newArr.push(i);
//     } else if (ele > rightEle && ele > leftEle) {
//       newArr.push(i);
//     }
//   }
//
//
//   return newArr;
// }
//
// console.log(peakFinder([1, 2, 3, 2, 1])); //=> [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); //=> [2, 6, 8]

//w2d3_pset
//2_divisible_by_three_pair_sum.js

/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

function divisibleByThreePairSum(array) {
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j++) {
      var num2 = array[j];

      if ((num1 + num2) % 3 === 0) {
        newArr.push([i, j]);
      }
    }
  }

  return newArr;
}

// var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1) //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
//
// var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) //=> [[1, 3]]







// time: 1:25
// rating: made some stupid mistakes
// do not return immediately! instead, push each pair into the pre-made array
// return immediately only when we want the FIRST or LAST of something

// function divisibleByThreePairSum(array) {
//   var newArr = [];
//
//   for (var i = 0; i < array.length; i++) {
//     var num1 = array[i];
//
//     for (var j = i + 1; j < array.length; j++) {
//       var num2 = array[j];
//       var sum = num1 + num2;
//
//       if (sum % 3 === 0) {
//         newArr.push([i, j]);
//       }
//     }
//   }
//
//   return newArr;
// }
//
// var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1) //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
//
// var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) //=> [[1, 3]]


//w2d3_pset
//3_zip_array.js

/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/

// time: 2:49
// made a stupid mistake where I thought I had to do nested loop
// in reality, I only had to loop through one array
// same length, so indices of both arrays would match up!
// no need to loop through second array to grab elements

// function zipArray(arr1, arr2) {
//   var newArr = [];
//
//   for (var i = 0; i < arr1.length; i++) {
//     var char = arr1[i];
//     var num = arr2[i];
//     var pair = [char, num];
//     newArr.push(pair);
//   }
//
//   return newArr;
// }
//
// var a1 = ['a', 'b', 'c', 'd'];
// var a2 = [10, 20, 30, 40];
//
// var result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]


//w2d3_pset
//4_two_dimensional_total.js

/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
***********************************************************************/

function twoDimensionalTotal(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    var subArray = array[i];

    for (var j = 0; j < subArray.length; j++) {
      var ele = subArray[j];
      sum += ele;
    }
  }

  return sum;
}

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

// console.log(twoDimensionalTotal(arr1)); // => 40
//
// var arr2 = [
//   [2],
//   [1, 9],
//   [1, 1, 1]
// ]
//
// console.log(twoDimensionalTotal(arr2)); // => 15











// time: 0:55
// rating: very easy because looping through 2-D array is straightforward

// function twoDimensionalTotal(array) {
//   var sum = 0;
//
//   for (var i = 0; i < array.length; i++) {
//     var subArray = array[i];
//
//     for (var j = 0; j < subArray.length; j++) {
//       var ele = subArray[j];
//       sum += ele;
//     }
//   }
//
//   return sum;
// }
//
// var arr1 = [
//   [5, 2, 5, 3],
//   [12, 13],
// ];
//
// console.log(twoDimensionalTotal(arr1)); // => 40
//
// var arr2 = [
//   [2],
//   [1, 9],
//   [1, 1, 1]
// ]
//
// console.log(twoDimensionalTotal(arr2)); // => 15


//w2d4_pset
//6_cap_vowels.js

/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

// time: 0:50
// rating: easy EXCEPT remember to look through every single example
// predict that you're gonna be comparing uppercase chars to lowercase vowels

// function capVowels(string) {
//   var newStr = "";
//   var vowels = "aeiouAEIOU";
//
//   for (var i = 0; i < string.length; i++) {
//     var char = string[i];
//
//     if (vowels.indexOf(char) > -1) {
//       newStr += char.toUpperCase();
//     } else {
//       newStr += char.toLowerCase();
//     }
//   }
//
//   return newStr;
// }
//
// console.log(capVowels('hello world')); // => 'hEllO wOrld'
// console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld'
// console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp'

//w2d4_pset
//7_next_two_primes.js

/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function nextTwoPrimes(num) {
  var arr = [];

  for (var i = num + 1; arr.length < 2; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
}
//
// console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
// console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
// console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
// console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
















// time: 2:30
// rating: alright but remember arr.length < 2  not <= 2
// once array length is 2, we want to STOP loop!

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//
//   for (var i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// //
//
// function nextTwoPrimes(num) {
//   var arr = [];
//
//   for (var i = num + 1; arr.length < 2; i++) {  // not equals to!
//     if (isPrime(i)) {
//       arr.push(i);
//     }
//   }
//
//   return arr;
// }
//
// console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
// console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
// console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
// console.log(nextTwoPrimes(97)); // => [ 101, 103 ]

//w2d4_pset
//8_pair_product.js

/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, num) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var ele1 = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      var ele2 = arr[j];

      if (ele1 * ele2 === num) {
        newArr.push([i, j]);
      }
    }
  }

  return newArr;
}

// console.log(pairProduct([1,2,3,4,5], 4)); //=> [ [ 0, 3 ] ]
// console.log(pairProduct([1,2,3,4,5], 8)); //=> [ [ 1, 3 ] ]
// console.log(pairProduct([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ]














// time: 2:00
// rating: easy

// function pairProduct(arr, num) {
//   var newArr = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     var ele1 = arr[i];
//
//     for (var j = i + 1; j < arr.length; j++) {
//       var ele2 = arr[j];
//
//       if (ele1 * ele2 === num) {
//         newArr.push([i, j]);
//       }
//     }
//   }
//
//   return newArr;
// }
//
// console.log(pairProduct([1,2,3,4,5], 4)); //=> [ [ 0, 3 ] ]
// console.log(pairProduct([1,2,3,4,5], 8)); //=> [ [ 1, 3 ] ]
// console.log(pairProduct([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ]



//w2d4_pset
//10_element_count.js

/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b', 'c']); // => { "c": 3, "a": 2, "b": 1 }
***********************************************************************/

// time: 0:57
// rating: easy

// function elementCount(array) {
//   var obj = {};
//
//   for (var i = 0; i < array.length; i++) {
//     var ele = array[i];
//
//     if (obj[ele] === undefined) {
//       obj[ele] = 1;
//     } else {
//       obj[ele] += 1;
//     }
//   }
//
//   return obj;
// }
//
// console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b', 'c'])); // => { "c": 3, "a": 2, "b": 1 }



//w2d4_pset
//11_titleize.js

/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

var punctuation = [";", "!", ".", "?", ",", "-"];

// Examples:
//
// titleize("forest gump, the runner", ["the"])
// => "Forest Gump, the Runner"
//
// titleize("MASTER AND COMMANDER", ["and"])
// => "Master and Commander"
//
// titleize("i LOVE; lover of mine", ["love", "of"])
// => "I love; Lover of Mine"
//
// titleize("shall we dance?", ["dance"])
// => "Shall We dance?"
***********************************************************************/

// time: 9:46
// honestly, fucked up a lot of this!
// made lots of tiny mistakes
// 1) I forgot that newWords was an array, not a string, and tried to concat
// 2) for my removePunc helper function, I forgot to return the actual word
// if it doesn't have any punctuation...messed up EVERYTHING

// function removePunc(word) {
//   var punc = [";", "!", ".", "?", ",", "-"];
//
//   for (var i = 0; i < word.length; i++) {
//     var char = word[i];
//
//     if (punc.indexOf(char) > -1) {
//       return word.slice(0, i);
//     }
//   }
//
//   return word;   // remember to return the word if it DOESN'T have punc!
// }
//
// // this will remove punctuation from a word so we can compare it to stopword
//
// function isStopWord(word, stopWords) {
//   var newWord = removePunc(word).toLowerCase();
//
//   if (stopWords.indexOf(newWord) > -1) {
//     return true;
//   }
//
//   return false;
// }
//
// // we remove punctuation from the word, then compare it with the stopwords list
//
// function toCapitalize(word) {
//   var newWord = "";
//
//   for (var i = 0; i < word.length; i++) {
//     var char = word[i];
//
//     if (i === 0) {
//       newWord += char.toUpperCase();
//     } else {
//       newWord += char.toLowerCase();
//     }
//   }
//
//   return newWord;
// }
//
// // this will capitalize all of the non stop words
//
// function titleize(title, stopWords) {
//   var newWords = [];
//   var words = title.split(" ");
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//
//     if (isStopWord(word, stopWords)) {
//       newWords.push(word.toLowerCase());   //push into array, not concat
//     } else {
//       newWords.push(toCapitalize(word));
//     }
//   }
//
//   var newSen = newWords.join(" ");
//   return newSen;
// }
//
//
// console.log(titleize("forest gump, the runner", ["the"]))
// //=> "Forest Gump, the Runner"
//
// console.log(titleize("MASTER AND COMMANDER", ["and"]))
// //=> "Master and Commander"
//
// console.log(titleize("i LOVE; lover of mine", ["love", "of"]))
// //=> "I love; Lover of Mine"
//
// console.log(titleize("shall we dance?", ["dance"]))
// //=> "Shall We dance?"


//w2d5_pset
//3_lcm.js

/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

function lcm(num1, num2) {
  for (var i = 1; true; i++) {

    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}

// console.log(lcm(2, 3)); // => 6
// console.log(lcm(6, 10)); // => 30
// console.log(lcm(24, 26)); // => 312









// time: 1:13
// rating: easy

// function lcm(num1, num2) {
//   for (var i = num1; i <= num1 * num2; i++) {
//     if (i % num1 === 0 && i % num2 === 0) {
//       return i;
//     }
//   }
// }
//
// console.log(lcm(2, 3)); // => 6
// console.log(lcm(6, 10)); // => 30
// console.log(lcm(24, 26)); // => 312


//w2d5_pset
//4_hipsterfy.js

/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("my turtle cheeseburger fries"); // => "my turtl cheeseburgr fris"
***********************************************************************/

function changeWord(word) {
  var vowels = "aeiou";

  for (var i = word.length - 1; i >= 0; i--) {
    var char = word[i];

    if (vowels.indexOf(char) > -1) {
      var first = word.slice(0, i);
      var second = word.slice(i + 1);
      return first + second;
    }
  }

  return word;
}


function hipsterfy(sentence) {
  var words = sentence.split(" ");
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = changeWord(word);
    newWords.push(newWord);
  }

  var newStr = newWords.join(" ");
  return newStr;
}

// console.log(hipsterfy("my turtle cheeseburger fries")); // => "my turtl cheeseburgr fris"














// time: 3:16
// rating: easy

// function changeWord(word) {
//   var vowels = "aeiou".split("");
//
//   for (var i = word.length - 1; i >= 0; i--) {
//     var char = word[i];
//
//     if (vowels.indexOf(char) > -1) {
//       var first = word.slice(0, i);
//       var last = word.slice(i + 1);
//       return first + last;
//     }
//   }
//
//   return word;
// }
//
// //
// function hipsterfy(sentence) {
//   var words = sentence.split(" ");
//   var newWords = [];
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var newWord = changeWord(word);
//     newWords.push(newWord);
//   }
//
//   var newSen = newWords.join(" ");
//   return newSen;
// }
//
// console.log(hipsterfy("my turtle cheeseburger fries"))


//P3
//2_min_max_product.js

/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array) {
  var min = null;
  var max = null;

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    if (min === null || num < min) {
      min = num;
    } else if (max === null || num > max) {
      max = num;
    }
  }

  return min * max;
}

// console.log(minMaxProduct([6, 3, 7, 2])) //=> 14
// console.log(minMaxProduct([0, 1, -5, 3, 6])) //=> -30















// time: 1:26
// rating: easy

// function minMaxProduct(array) {
//   var max = null;
//   var min = null;
//
//   for (var i = 0; i < array.length; i++) {
//     var num = array[i];
//
//     if (max === null || num > max) {
//       max = num;
//     } else if (min === null || num < min) {
//       min = num;
//     }
//   }
//
//   return max * min;
// }



//P3
//3_phrase_finder.js
/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

function phraseFinder(words, phrase) {
  for (var i = 0; i < words.length; i++) {
    var word1 = words[i];

    for (var j = i + 1; j < words.length; j++) {
      var word2 = words[j];

      if (word1 + " " + word2 === phrase || word2 + " " + word1 === phrase) {
        return true;
      }
    }
  }

  return false;
}










// time: 1:05
// remember, you have to do a nested loop if you're comparing
// any two things in the same array!
// you can do word2 = words[i + 1] only when you're comparing CONSECUTIVE things


// function phraseFinder(words, phrase) {
//   for (var i = 0; i < words.length; i++) {
//     var word1 = words[i];
//
//     for (var j = i + 1; j < words.length; j++) {
//       var word2 = words[j];
//
//       if (word1 + " " + word2 === phrase) {
//         return true;
//       } else if (word2 + " " + word1 === phrase) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
//
// console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye')) //=> false

//P3
//5_value_replace.js

/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with its corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

// time: 1:15
// give yourself time to read the problem AND examples!
// for example, I didn't realize that there would be things NOT in the object

// function valueReplace(array, object) {
//   var newArr = [];
//
//   for (var i = 0; i < array.length; i++) {
//     var ele = array[i];
//     var value = object[ele];
//
//     if (object[ele] === undefined) {
//       newArr.push(ele);
//     } else {
//       newArr.push(value);
//     }
//   }
//
//   return newArr;
// }
//
// console.log(valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4}))
// //=> [ 1, 2, 'c', 4 ]
//
// console.log(valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'}))
// //=> [ 'placements', 'operations', 'tommy' ]



//A3
//5_magic_cipher.js

/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

// time: 1:27
// easy, but remember to be consistent with names! (name is cipher not obj)

// function magicCipher(sentence, cipher) {
//   var newStr = "";
//
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//     var value = cipher[char];
//
//     if (cipher[char] === undefined) {
//       newStr += char;
//     } else {
//       newStr += value;
//     }
//   }
//
//   return newStr;
// }
//
// console.log(magicCipher("add me on facebook" , { a : "c", d : "q"})) //=> "cqq me on fccebook"
// console.log(magicCipher("where are you?" , { v : "l", '?' : "!"})) //=> "where are you!"
// console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"})) //=> "dance"



//w2d5_pset
//4_hipsterfy.js

/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("my runner anaconda"); // => "my runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/



//P4
//1_object_to_string.js

/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/

//time: 0:43
//rating: easy

// function objectToString(count) {
//   var str = "";
//
//   for (var char in count) {
//     var num = count[char];
//
//     for (var i = 0; i < num; i++) {
//       str += char;
//     }
//   }
//
//   return str;
// }
//
// console.log(objectToString({a : 2, b: 4, c: 1})) //=> 'aabbbbc'
// console.log(objectToString({b: 1, o: 2, t: 1})) //=> 'boot'


//P4
//2_shortest_word.js

/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  var words = sentence.split(" ");
  var shortestWord = words[0];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}




// time: 1:07
// rating: easy

// function shortestWord(sentence) {
//   var words = sentence.split(" ");
//   var shortest = words[0];
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//
//     if (word.length < shortest.length) {
//       shortest = word;
//     }
//   }
//
//   return shortest;
// }
//
// console.log(shortestWord('app academy is cool')) //=> 'is'
// console.log(shortestWord('bootcamp prep')) //=> 'prep'


//P4
//4_value_concat.js

/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

//time: 1:07
//rating: easy - especially since I looked at examples!

// function valueConcat(array, obj) {
//   var newArr = [];
//
//   for (var i = 0; i < array.length; i++) {
//     var ele = array[i];
//     var value = obj[ele];
//
//     if (obj[ele] === undefined) {
//       newArr.push(ele);
//     } else {
//       newArr.push(ele + value);
//     }
//   }
//
//   return newArr;
// }
//
// console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'}))
// //=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
//
// console.log(valueConcat(['a', 'b', 'c'], {b: 2, c: 3}))
// //=> [ 'a', 'b2', 'c3' ]


//w3d1_pset
//1_object_size.js

/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.

Examples:

var obj1 = {
  name: 'Fido',
  age: '4'
}

objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

objectSize(obj2); // => 3
***********************************************************************/

// time: 0:30
// rating: easy

// function objectSize(obj) {
//   var count = 0;
//
//   for (var key in obj) {
//     count++
//   }
//
//   return count;
// }
//
//
// var obj1 = {
//   name: 'Fido',
//   age: '4'
// }
//
// console.log(objectSize(obj1)); // => 2
//
// var obj2 = {
//   name: 'App Academy',
//   course: 'Bootcamp Prep',
//   locations: ['SF', 'NY']
// }
//
// console.log(objectSize(obj2)); // => 3


//w3d1_pset
//2_three_in_a_row.js

/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

// time: 0:54
// rating: easy, especially since I remembered arr.length - 2 (jumps ahead)

// function threeInARow(arr) {
//   for (var i = 0; i < arr.length - 2; i++) {
//     var num1 = arr[i];
//     var num2 = arr[i + 1];
//     var num3 = arr[i + 2];
//
//     if (num1 === num2 && num2 === num3) {
//       return true;
//     }
//   }
//
//   return false;
// }
//
// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;

//w3d1_pset
//3_three_increasing.js

/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false
***********************************************************************/

// time: 0:50
// rating: easy

// function threeIncreasing(arr) {
//   for (var i = 0; i < arr.length - 2; i++) {
//     var num1 = arr[i];
//     var num2 = arr[i + 1];
//     var num3 = arr[i + 2];
//
//     if (num2 === num1 + 1 && num3 === num2 + 1) {
//       return true;
//     }
//   }
//
//   return false;
// }
//
// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false

//w3d1_pset
//4_power.js

/***********************************************************************
Write a function `power(base, exp)` that takes in two numbers, a base
and exponent. The function should return `base` raised to `exp` power.
Solve this using a loop.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
power(11, 1); // => 11
***********************************************************************/

// time: 0:48
// rating: easy

// function power(base, exp) {
//   var result = 1;
//
//   for (var i = 0; i < exp; i++) {
//     result = result * base;
//   }
//
//   return result;
// }
//
// console.log(power(2, 5)); // => 32
// console.log(power(2, 10)); // => 1024
// console.log(power(9, 2)); // => 81
// console.log(power(9, 3)); // => 729
// console.log(power(11, 0)); // => 1
// console.log(power(11, 1)); // => 11

//let's solve it with recursion

// function power(base, exp) {
//   if (exp === 0) {
//     return 1;
//   } else {
//     return base * power(base, exp - 1)
//   }
// }


//w3d1_pset
//5_reverb.js

/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

// time: 1:05
// made the stupidest mistake
// when iterating backwards, remember it's i >= 0 (greater than index zero!)

// function reverb(word) {
//   var vowels = "aeiou";
//
//   for (var i = word.length - 1; i >= 0; i--) {  // i >= 0!!!!
//     var char = word[i];
//
//     if (vowels.indexOf(char) > -1) {
//       return word + word.slice(i);
//     }
//   }
//
//   return word;
// }
//
// console.log(reverb('running')); // => 'runninging'
// console.log(reverb('wild')); // => 'wildild'
// console.log(reverb('debugged')); // => 'debuggeded'
// console.log(reverb('my')); // => 'my'

//A4
//2_longest_word

/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

// time: 1:10
// rating: easy

// function longestWord(sentence) {
//   var longest = "";
//   var words = sentence.split(" ");
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//
//   return longest;
// }
//
// console.log(longestWord('app academy is cool')); // => 'academy'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('bootcamp')); // => 'bootcamp'
// console.log(longestWord('')); // => ''


//A4
//4_silly_cipher

/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

// time: 1:10
// rating: easy

// function sillyCipher(sentence, cipher) {
//   var newStr = "";
//
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//
//     if (cipher[char] === undefined) {
//       newStr += ".";
//     } else {
//       newStr += cipher[char];
//     }
//   }
//
//   return newStr;
// }
//
// console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})) //=> 'cxxro'
// console.log(sillyCipher("apple", { a : "c", p : "x"})) //=> 'cxx..'
// console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})) //=> '.ee....q.q..q!'
// console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"})) //=> 'dan..''


//w3d2_pset
//7_count_repeats.js

/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

// time: 2:28
// rating: easy

// function charCount(string) {
//   var obj = {};
//
//   for (var i = 0; i < string.length; i++) {
//     var char = string[i];
//
//     if (obj[char] === undefined) {
//       obj[char] = 1;
//     } else {
//       obj[char] += 1;
//     }
//   }
//
//   return obj;
// }
//
// //
//
// function countRepeats(string) {
//   var counter = 0;
//   var obj = charCount(string);
//
//   for (var char in obj) {
//     var num = obj[char];
//
//     if (num > 1) {
//       counter++;
//     }
//   }
//
//   return counter;
// }
//
// console.log(countRepeats('alvin')); //=> 0
// console.log(countRepeats('aaaalvin')); //=> 1
// console.log(countRepeats('pops')); //=> 1
// console.log(countRepeats('mississippi')); //=> 3
// console.log(countRepeats('hellobootcampprep')); //=> 4


//w3d2_pset
//8_pairs_to_string.js

/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

// time: 1:16
// remember to use "j" inside the nested loop!
// CHANGE variables when you do another loop inside a loop!

// function pairsToString(arr) {
//   var str = "";
//
//   for (var i = 0; i < arr.length; i++) {
//     var pair = arr[i];    // array
//     var char = pair[0];
//     var num = pair[1];
//
//     for (var j = 0; j < num; j++) {  // remember to use "j" in nested loop
//       str += char;
//     }
//   }
//
//   return str;
// }
//
// var array1 = [
//   ['a', 3],
//   ['b', 1],
//   ['c', 2]
// ];
//
// console.log(pairsToString(array1)); // => 'aaabcc'
//
// var array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
//
// console.log(pairsToString(array2)); // => 'food!'


//w3d3_pset
//4_my_every.js

/***********************************************************************
Write a function `myEvery(arr, cb)` that takes in an array and a
callback. The function should call the cb for every element of the array.
The function should return true only if the callback returns true when
passed in every the element of the array. The function should return
false otherwise.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

myEvery([10, 4, 8, 20], isEven); // => true
myEvery([2, 2, 10, 11, 12], isEven); // => false
***********************************************************************/

// time: 0:50
// rating: Easy
// remember, check EVERY element of array...then after loop, return true
// the moment it fails, you immediately return false

// function myEvery(arr, cb) {
//   for (var i = 0; i < arr.length; i++) {
//     var ele = arr[i];
//
//     if (cb(ele) === false) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function isEven(num) {
//   return num % 2 === 0;
// }
//
// console.log(myEvery([10, 4, 8, 20], isEven)); // => true
// console.log(myEvery([2, 2, 10, 11, 12], isEven)); // => false


//w3d3_pset
//8_power_sequence.js

/***********************************************************************
Write a function `powerSequence(base, length)` that takes in two numbers,
`base` and `length`. The function should return an array containing a
power sequence with the given `length`. Assume that the `length` is at
least 1.

The first number of a power sequence begins with `base`. The second
number of the sequence is the product between the first number and the
base. The third number of the sequence is the product between the second
number and the base...

Examples:

powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3); // => [ 8, 64, 512 ]
***********************************************************************/

// time: 1:40
// remember to actually push the results into the array
// or else nothing will show up!

// function powerSequence(base, length) {
//   var newArr = [];
//   var result = 1;
//
//   for (var i = 0; i < length; i++) {
//     result = result * base;
//     newArr.push(result);
//   }
//
//   return newArr;
// }
//
// console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ]
// console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ]
// console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ]


//w3d3_pset
//9_collapse_string

/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

// hard - try to remember this official solution!

// function collapseString(str) {
//   var newStr = "";
//
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     var lastChar = newStr[newStr.length - 1];
//
//     if (char !== lastChar) {
//       newStr += char;
//     }
//   }
//
//   return newStr;
// }
//
// console.log(collapseString('apple')); //=> 'aple'
// console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!'
// console.log(collapseString('hello   app academy')); //=> 'helo ap academy'


//w3d4_pset
//2_has_all_vowels.js

/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

// time: 1:00
// rating: easy, remember what you're doing
// "i'm going to take each vowel and try to look for it in the word"
// "the moment I can't find it, I know it HAS to be false!"

// function hasAllVowels(str) {
//   var vowels = "aeiou";
//
//   for (var i = 0; i < vowels.length; i++) {
//     var vowel = vowels[i];
//
//     if (str.indexOf(vowel) === -1) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// console.log(hasAllVowels('have you gone biking?')); // => true
// console.log(hasAllVowels('get out of the way, silly')); // => true
// console.log(hasAllVowels('bootcamp prep')); // => false
// console.log(hasAllVowels('hello world')); // => false


//w3d4_pset
//3_favorite_word.js

/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function countLetters(word, letter) {
  var counter = 0;

  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if (char === letter) {
      counter += 1;
    }
  }

  return counter;
}


function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(" ");
  var faveWord = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var wordNum = countLetters(word, favoriteLetter);
    var faveWordNum = countLetters(faveWord, favoriteLetter);

    if (wordNum > faveWordNum) {
      faveWord = word;
    }
  }

  return faveWord;
}

// console.log(favoriteWord('p', 'sinful caesar sipped his snifter')) // => 'sipped'
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter')) //=> 'caesar'
// console.log(favoriteWord('s', 'sinful caesar sipped his snifter')) //=> 'sinful'
// console.log(favoriteWord('x', 'sinful caesar sipped his snifter')) //=> ''















//time: 3:14
//remember what to do when trying to get the word that appears first if there are ties
//if there are ties and we want the last one, then keep looping
//replace every time something is greater than OR EQUAL TO
//if there are ties and we want the first one, then we can return immediately
//or we cna keep looping, but only replace when something is greater than but NOT equal to

function countLetters(word, letter) {
  var counter = 0;

  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if (char === letter) {
      counter++
    }
  }

  return counter;
}

//


function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(" ");
  var favoriteWord = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letterCount = countLetters(word, favoriteLetter);  // number
    var faveLetterCount = countLetters(favoriteWord, favoriteLetter);

    if (letterCount > faveLetterCount) {
      favoriteWord = word;
      return favoriteWord;  // immediately return, this is the first word in sentence
      //don't even need to return, because we didn't include >=
      //if we did >= then favoriteWord would keep going until the LAST one
    }
  }

  return favoriteWord; // if you couldn't find a word with more fave letters than ""
}
//
// console.log(favoriteWord('p', 'sinful caesar sipped his snifter')) // => 'sipped'
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter')) //=> 'caesar'
// console.log(favoriteWord('s', 'sinful caesar sipped his snifter')) //=> 'sinful'
// console.log(favoriteWord('x', 'sinful caesar sipped his snifter')) //=> ''


//w3d4_pset
//4_mind_ps_and_qs.js

/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/

function mindPsAndQs(str) {
  var longest = 0;
  var current = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === "P" || char === "Q") {
      current += 1;

      if (current > longest) {
        longest = current;
      }
    } else {
      current = 0;
    }
  }

  return longest;
}

// console.log(mindPsAndQs('BOOTCAMP')); // => 1
// console.log(mindPsAndQs('APCDQQPPC')); // => 4
// console.log(mindPsAndQs('PQPQ')); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5













// time: 1:15
// rating: not bad, just because I knew exactly what to do

// function mindPsAndQs(str) {
//   var longestStreak = 0;
//   var currentStreak = 0;
//
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//
//     if (char === "P" || char === "Q") {
//       currentStreak += 1;
//
//       if (currentStreak > longestStreak) {
//         longestStreak = currentStreak;
//       }
//     } else {
//       currentStreak = 0;
//     }
//   }
//
//   return longestStreak;
// }
//
// console.log(mindPsAndQs('BOOTCAMP')); // => 1
// console.log(mindPsAndQs('APCDQQPPC')); // => 4
// console.log(mindPsAndQs('PQPQ')); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5


// console.log(mindPsAndQs('BOOTCAMP')); // => 1
// console.log(mindPsAndQs('APCDQQPPC')); // => 4
// console.log(mindPsAndQs('PQPQ')); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5

//P5
//1_is_passing.js

/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) => false
*******************************************************************************/

// time: 1:16
// accidentally returned average instead of true/false
// always keep track of what the question is asking for


// function isPassing(assessments) {
//   var sum = 0;
//
//   for (var i = 0; i < assessments.length; i++) {
//     var assessment = assessments[i]; // object
//     var score = assessment["score"];
//     sum += score;
//   }
//
//   var avg = sum / assessments.length;
//
//   return avg >= 70;
// }
//
// var assessments1 = [
//   {number: 1, score: 60},
//   {number: 2, score: 90},
//   {number: 3, score: 80},
//   {number: 4, score: 100},
//   {number: 5, score: 85}
// ];
//
// console.log(isPassing(assessments1)) //=> true
//
//
// var assessments2 = [
//   {number: 1, score: 60},
//   {number: 2, score: 20},
//   {number: 3, score: 45}
// ];
//
// console.log(isPassing(assessments2)) //=> false


//P5
//2_variable_nameify.js

/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

// time: 3:12
// rating: easy

// function toCapitalize(word) {
//   var firstLetter = word[0].toUpperCase();
//   var others = word.slice(1).toLowerCase();
//   return firstLetter + others;
// }
//
// //
// function variableNameify(words) {
//   var newStr = "";
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//
//     if (i === 0) {  // if it's the first word in the array
//       newStr += word.toLowerCase();
//     } else {
//       newStr += toCapitalize(word);
//     }
//   }
//
//   return newStr;
// }
//
// console.log(variableNameify(['is', 'prime'])) //=> 'isPrime'
// console.log(variableNameify(['remove', 'last', 'vowel'])) //=> 'removeLastVowel'
// console.log(variableNameify(['MaX', 'VALUE'])) //=> 'maxValue'

//w3d5_pset
//2_split_half_array.js

/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

function splitHalfArray(array) {
  var newArr = [];
  var midIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    newArr.push(array.slice(0, midIndex));
    newArr.push(array.slice(midIndex));
  } else {
    newArr.push(array.slice(0, midIndex));
    newArr.push(array.slice(midIndex + 1));
  }

  return newArr;
}

// console.log(splitHalfArray([1, 2, 3, 4, 5]));
// // => [ [ 1, 2 ], [ 4, 5 ] ]
//
// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]











// time: 2:42
// rating: easy

// function splitHalfArray(array) {
//   var newArr = [];
//   var midIndex = Math.floor(array.length / 2) // 3, d
//
//   if (array.length % 2 === 0) {
//     newArr.push(array.slice(0, midIndex));
//     newArr.push(array.slice(midIndex));
//   } else {
//     newArr.push(array.slice(0, midIndex));
//     newArr.push(array.slice(midIndex + 1));
//   }
//
//   return newArr;
// }
//
// console.log(splitHalfArray([1, 2, 3, 4, 5]));
// // => [ [ 1, 2 ], [ 4, 5 ] ]
//
// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

//w3d5_pset
//3_three_unique_vowels.js

/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

function threeUniqueVowels(string) {
  var vowels = "aeiou";
  var vowelCount = 0;

  for (var i = 0; i < vowels.length; i++) {
    var vowel = vowels[i];

    if (string.indexOf(vowel) > -1) {
      vowelCount += 1;
    }
  }

  return vowelCount >= 3;
}

// console.log(threeUniqueVowels('delicious')); // => true
// console.log(threeUniqueVowels('bootcamp prep')); // => true
// console.log(threeUniqueVowels('bootcamp')); // => false
// console.log(threeUniqueVowels('dog')); // => false
// console.log(threeUniqueVowels('go home')); // => false












// //time: 2:56
// //rating: easy but I feel like this has many solutions
// //can also iterate through vowels array
//
// function threeUniqueVowels(string) {
//   var counter = 0;
//   var vowels = "aeiou";
//
//   for (var i = 0; i < vowels.length; i++) {
//     var vowel = vowels[i];
//
//     if (string.indexOf(vowel) > -1) {
//       counter++;
//     }
//   }
//
//   return counter >= 3;
// }
//
// //if the string has 1 unique vowel or 2 unique vowels, return false
//
// function threeUniqueVowels(string) {
//   var vowels = "aeiou";
//   var uniqueVowels = [];
//
//   for (var i = 0; i < string.length; i++) {
//     var char = string[i];
//
//     if (vowels.indexOf(char) > -1 && uniqueVowels.indexOf(char) === -1) {
//       uniqueVowels.push(char);
//     }
//   }
//
//   var numUniqueVowels = uniqueVowels.length;
//   return numUniqueVowels >= 3;
// }
//
// console.log(threeUniqueVowels('delicious')); // => true
// console.log(threeUniqueVowels('bootcamp prep')); // => true
// console.log(threeUniqueVowels('bootcamp')); // => false
// console.log(threeUniqueVowels('dog')); // => false
// console.log(threeUniqueVowels('go home')); // => false



//w3d5_pset
//4_vowel_shift.js

/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence) {
  var newStr = "";
  var vowels = "aeiou";

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];

    if (vowels.indexOf(char) > -1) {
      var vowelIndex = vowels.indexOf(char);
      var newIndex = (vowelIndex + 1) % vowels.length;
      var newVowel = vowels[newIndex];
      newStr += newVowel;
    } else {
      newStr += char;
    }
  }

  return newStr;
}

// time: 2:49
// rating: easy, just remember to use variables to keep track

// function vowelShift(sentence) {
//   var newSen = "";
//   var vowels = "aeiou";
//
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//
//     if (vowels.indexOf(char) > -1) {
//       var vowelIndex = vowels.indexOf(char);  // number
//       var newVowelIndex = (vowelIndex + 1) % vowels.length; // wraps around
//       var newVowel = vowels[newVowelIndex];
//       newSen += newVowel;
//     } else {
//       newSen += char;
//     }
//   }
//
//   return newSen;
// }
//
// console.log(vowelShift('bootcamp')); // => 'buutcemp'
// console.log(vowelShift('hello world')); // => 'hillu wurld'
// console.log(vowelShift('on the hunt')); // => 'un thi hant'





//P6
//2_has_symmetry.js

/*******************************************************************************
Write a function hasSymmetry(array) that takes in an array. The function should
return true if the array has symmetry, false otherwise. For an array to have symmetry,
it should be the same forwards and backwards.

TIP:
In JavaScript, it is not possible to compare arrays for equality with `===`.
In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) => true
hasSymmetry([1, 2, 3, 3, 4, 1]) => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) => false
*******************************************************************************/

function hasSymmetry(array) {
  for (var i = 0; i < array.length; i++) {
    var ele1 = array[i];
    var ele2 = array[array.length - 1 - i];

    if (ele1 !== ele2) {
      return false;
    }
  }

  return true;
}

// console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) //=> true
// console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) //=> false
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) //=> true
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) //=> false






// time: 1:04
// rating: easy

// function hasSymmetry(array) {
//   for (var i = 0; i < array.length; i++) {
//     var ele1 = array[i];
//     var ele2 = array[array.length - 1 - i];
//
//     if (ele1 !== ele2) {
//       return false;     //we don't want to cut the loop short by returning too early
//     }
//   }
//
//   return true;
// }
//
// console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) //=> true
// console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) //=> false
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) //=> true
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) //=> false

//P6
//3_total_num_problems.js

/******************************************************************************
Write a function totalNumProblems(assessments) that takes in an object of assessment
objects. The function should return the total number of problems in all assessments.

Example:

var assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
}

totalNumProblems(assessments) => 29
*******************************************************************************/

//time: 1:34
//rating: straightforward

// function totalNumProblems(assessments) {
//   var num = 0;
//
//   for (var date in assessments) {
//     var assessment = assessments[date];
//     var problems = assessment["problems"]  // array
//     var numProblems = problems.length;
//     num += numProblems;
//   }
//
//   return num;
// }

//P6
//5_nums_to_words.js

/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
its "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

// time: 1:49
//rating: easy

// function numsToWords(numString) {
//   var newStr = "";
//   var obj = {
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine",
//     10: "Ten"
//   };
//
//   for (var i = 0; i < numString.length; i++) {
//     var str = numString[i];
//     var replacement = obj[str];
//     newStr += replacement;
//   }
//
//   return newStr;
// }
//
// console.log(numsToWords('42')) //=> 'FourTwo'
// console.log(numsToWords('123')) //=> 'OneTwoThree'
// console.log(numsToWords('159598')) //=> 'OneFiveNineFiveNineEight'

//A5
//1_highest_score.js

/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

// time: 6:54
// rating: straightforward, just takes a while bc of helper functions

// function makeScoresArray(students) {
//   var arr = [];
//
//   for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     var score = student["score"];
//     arr.push(score);
//   }
//
//   return arr;
// }
//
// //makes array of scores
//
// //
// function findHighest(students) {
//   var max = null;
//   var arr = makeScoresArray(students);
//
//   for (var i = 0; i < arr.length; i++) {
//     var score = arr[i];
//
//     if (score > max || max === null) {
//       max = score;
//     }
//   }
//
//   return max;
// }
//
// //finds highest score
//
// function findInitials(string) {
//   var names = string.split(" ");
//   var firstName = names[0];
//   var lastName = names[1];
//   var firstIn = firstName[0];
//   var lastIn = lastName[0];
//
//   return firstIn + lastIn;
// }
//
//
// //finds initials
// //
// function highestScore(students) {
//   var newStr = "";
//   var highestScore = findHighest(students);
//
//   for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     var name = student["name"];
//     var initials = findInitials(name);
//     var id = student["id"];
//     var score = student["score"];
//
//     if (score === highestScore) {
//       newStr = newStr + initials + id;
//     }
//   }
//
//
//   return newStr;
// }
//
// var students = [
//  {name: 'Alvin Zablan', id: 128, score: -42},
//  {name: 'Eliot Bradshaw', id: 32, score: 57},
//  {name: 'Tommy Duek', id: 2, score: 99},
//  {name: 'Fred Sladkey', id: 256, score: 94}
// ];
//
// console.log(highestScore(students)); //=> 'TD2'


//A5
//2_snake_to_camel.js

/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/

//time: 1:42
//rating: easy

// function capitalize(word) {
//   var firstLetter = word[0].toUpperCase();
//   var others = word.slice(1).toLowerCase();
//   return firstLetter + others;
// }
//
// //
//
// function snakeToCamel(str) {
//   var newStr = "";
//   var words = str.split("_");
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var newWord = capitalize(word);
//     newStr += newWord;
//   }
//
//   return newStr;
// }
//
// console.log(snakeToCamel('snakes_go_hiss')); // => 'SnakesGoHiss'
// console.log(snakeToCamel('say_hello_world')); // => 'SayHelloWorld'
// console.log(snakeToCamel('bootcamp_prep_is_cool')); // => 'BootcampPrepIsCool'
// console.log(snakeToCamel('BOOtcamp_PREP_iS_cOol')); // => 'BootcampPrepIsCool'

//A5
//3_sum_2d_array.js

/*******************************************************************************
Write a function sum2DArray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/

// time: 0:56
// rating: easy

// function sum2DArray(array) {
//   var sum = 0;
//
//   for (var i = 0; i < array.length; i++) {
//     var subArray = array[i];
//
//     for (var j = 0; j < subArray.length; j++) {
//       var ele = subArray[j];
//       sum += ele;
//     }
//   }
//
//   return sum;
// }
//
// var arr1 = [
//   [1,2,3],
//   [4,5],
//   [6],
// ];
// console.log(sum2DArray(arr1)); // => 21
//
// var arr2 = [
//   [-10, 2, 3],
//   [1],
//   [10, -5],
//   [2]
// ];
// console.log(sum2DArray(arr2)); // => 3


//A5
//4_min_value_callback.js

/*******************************************************************************
Write a funtion minValueCallback(array, cb) that takes in an array of numbers and
a callback. The function should call `cb`, passing in the minimum number of the array.
`minValueCallback` should return the return value of `cb`. If the array is empty,
then pass `null` into `cb`.

Examples:

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18
*******************************************************************************/

// time: 1:15
//rating: easy

// function minValueCallback(array, cb) {
//   var min = null;
//
//   for (var i = 0; i < array.length; i++) {
//     var num = array[i];
//
//     if (num < min || min === null) {
//       min = num;
//     }
//   }
//
//   return cb(min);
// }
//
// var array1 = [-2, -7, 0, 8];
// console.log(minValueCallback(array1, Math.abs)); // => 7
//
// // example cb
// function double(n) {
//   return n * 2
// }
// var array2 = [12, 9, 20, 13, 14];
// console.log(minValueCallback(array2, double)); // => 18

//A5
//5_my_select.js

/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]
*******************************************************************************/

// time: 0:46
// rating: easy

// function mySelect(arr, cb) {
//   var newArr = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     var ele = arr[i];
//
//     if (cb(ele, i, arr) === true) {
//       newArr.push(ele);
//     }
//   }
//
//   return newArr;
// }
//
// function isUpper(str) {
//   return str.toUpperCase() === str;
// }
//
// function isEven(n) {
//   return n % 2 === 0;
// }
//
// var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
// console.log(result1); // => [ 'BOOTCAMP', 'COOL' ]
//
// var result2 = mySelect([1, 2, 4, 7, 8], isEven);
// console.log(result2); // => [ 2, 4, 8 ]

//A6
//2_is_palindrome.js

/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  var words = sentence.split(" ");
  var newSen = words.join("");

  for (var i = 0; i < newSen.length; i++) {
    var char1 = newSen[i];
    var char2 = newSen[newSen.length - 1 - i];

    if (char1 !== char2) {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome('rats live on no evil star')); // => true
// console.log(isPalindrome('stella won no wallets')); // => true
// console.log(isPalindrome('racecar')); // => true
// console.log(isPalindrome('hello world')); // => false



// weirdly hard!
// remember to get rid of spaces
// first split the sentence into a bunch of words
//then join the words back together, but with no space in between

// function isPalindrome(sentence) {
//   var words = sentence.split(" "); //creates array of separate words
//   var newSen = words.join(""); //creates string of words without spaces in between
//
//   for (var i = 0; i < newSen.length; i++) {
//     var char1 = newSen[i];
//     var char2 = newSen[newSen.length - 1 - i];
//
//     if (char1 !== char2) {
//       return false;
//     }
//   }
//
//   return true;
// }


// weirdly stuck on this one?
// took like almost 5 minutes!
// couldn't figure out how to get rid of spaces

// function makeArray(sentence) {
//   var arr = [];
//
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//
//     if (char !== " ") {
//       arr.push(char);
//     }
//   }
//
//   return arr;
// }
//
// //
//
// function isPalindrome(sentence) {
//   var arr = makeArray(sentence);
//
//   for (var i = 0; i < arr.length; i++) {
//     var char1 = arr[i];
//     var char2 = arr[arr.length - 1 - i];
//
//     if (char1 !== char2) {
//       return false;
//     }
//   }
//
//   return true;
// }

// console.log(isPalindrome('rats live on no evil star')); // => true
// console.log(isPalindrome('stella won no wallets')); // => true
// console.log(isPalindrome('racecar')); // => true
// console.log(isPalindrome('hello world')); // => false


//A6
//3_passing_students.js

/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/



//A6
//4_laligat_array.js

/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/



//w4d2_pset
//2_is_unique_anagram

/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
isUniqueAnagram('accc', 'aaccc')
***********************************************************************/

function isUniqueAnagram(word1, word2) {
  for (var i = 0; i < word1.length; i++) {
    var char1 = word1[i];

    if (word2.indexOf(char1) === -1 || word1.length !== word2.length) {
      return false;
    }
  }

  return true;
}
//
// console.log(isUniqueAnagram('iceman', 'cinema')); // => true
// console.log(isUniqueAnagram('abcd', 'adcb')); // => true
// console.log(isUniqueAnagram('abcd', 'adxb')); // => false
// console.log(isUniqueAnagram('abcd', 'abcdx')); // => false

//w4d2_pset
//3_reverse_hipsterfy.js

/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("my turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/

//w4d2_pset
//4_winning_hand.js

/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/

function findScore(str) {
  var obj = {
    J: 1,
    Q: 2,
    K: 3
  };

  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var num = obj[char];
    sum += num;
  }

  return sum;
}


//

function winningHand(hand1, hand2) {
  var newStr = "";
  var score1 = findScore(hand1);
  var score2 = findScore(hand2);

  if (score1 > score2) {
    newStr += hand1;
  } else if (score1 < score2) {
    newStr += hand2;
  } else if (score1 === score2) {
    newStr += "DRAW";
  }

  return newStr;
}



//w4d2_pset
//5_shift_chars.js

/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/

function shiftChars(word, num) {
  var alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  var newStr = "";

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    var alphaIndex = alphabet.indexOf(char);
    var newIndex = (alphaIndex + num) % alphabet.length;
    var newChar = alphabet[newIndex];
    newStr += newChar;
  }

  return newStr;
}

// time: 1:25
// rating: easy

// function shiftChars(word, num) {
//   var newStr = "";
//   var alphabet = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m',
//     'n','o','p','q','r','s','t','u','v','w','x','y','z'
//   ];
//
//   for (var i = 0; i < word.length; i++) {
//     var char = word[i];
//     var alphaIndex = alphabet.indexOf(char);
//     var newAlphaIndex = (alphaIndex + num) % alphabet.length;
//     var newChar = alphabet[newAlphaIndex];
//     newStr += newChar;
//   }
//
//   return newStr;
// }
//
// console.log(shiftChars('able', 1)); // => 'bcmf'
// console.log(shiftChars('apple', 2)); //=> 'crrng'
// console.log(shiftChars('bootcamp', 3)); //=> 'errwfdps'
// console.log(shiftChars('zebra', 5)); //=> 'ejgwf'

//w4d2_pset
//6_uncompress_string.js

/***********************************************************************
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.

HINT: Use the built-in `Number` function to turn the string
representation of a number into a number
Number('42'); // => 42;

Examples:

uncompressString('a2b4c1'); // => 'aabbbbc'
uncompressString('b1o2t1'); // => 'boot'
uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
***********************************************************************/

function uncompressString(str) {
  var newStr = "";

  for (var i = 0; i < str.length; i += 2) { //select every 2nd index
    var char = str[i]; //on the even index is the char
    var num = str[i + 1]; // right next to that index is the num

    for (var j = 0; j < num; j++) { //nested loop; this is number of times we concat
      newStr += char; //concatenate character into newStr until loop breaks
    }
  }

  return newStr;
}


// console.log(uncompressString('a2b4c1')); // => 'aabbbbc'
// console.log(uncompressString('b1o2t1')); // => 'boot'
// console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'













// hard
//REMEMBER to do "j" instead of "i" in nested loops!!!!!

//
// function uncompressString(str) {
//   var newStr = "";
//
//   for (var i = 0; i < str.length - 1; i++) {
//     var char = str[i];
//     var num = str[i + 1]
//
//     if (i % 2 === 0) {
//       for (var j = 0; j < num; j++) {
//         newStr += char;
//       }
//     }
//   }
//
//   return newStr;
// }
//
// console.log(uncompressString('a2b4c1')); // => 'aabbbbc'
// console.log(uncompressString('b1o2t1')); // => 'boot'
// console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'


//w4d2_pset
//7_fibonacci.js

/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
If you don't know what recursion is, we'll see it tomorrow!

Examples:

fibonacci(0); // => []
fibonacci(1); // => [ 1 ]
fibonacci(2); // => [ 1, 1 ]
fibonacci(3); // => [ 1, 1, 2 ]
fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
***********************************************************************/

function fibonacci(n) {
  var arr = [];

  for (var i = 0; i < n; i++) {

    if (arr.length < 2) {
      arr.push(1);
    } else {
      var last = arr[arr.length - 1];
      var secondLast = arr[arr.length - 2];
      arr.push(last + secondLast);
    }
  }

  return arr;
}

// console.log(fibonacci(0)); // => []
// console.log(fibonacci(1)); // => [ 1 ]
// console.log(fibonacci(2)); // => [ 1, 1 ]
// console.log(fibonacci(3)); // => [ 1, 1, 2 ]
// console.log(fibonacci(5)); // => [ 1, 1, 2, 3, 5 ]
// console.log(fibonacci(10)); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

//w4d3_pset
//3_alternate_case.js

/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
  var newStr = ""

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (i % 2 === 0) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }

  return newStr;
}

// console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
// console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
// console.log(alternateCase('hello')); // => 'HeLlO'


//w4d3_pset
//4_stop_watch.js

/***********************************************************************
Write a function stopWatch(totalSeconds) that takes in a number of
seconds. The function should return the time string based on that number
of seconds. The time should be formatted in hours (H), minutes (M), and
seconds(S) in the form HH:MM:SS.

Hint: the seconds and minutes count of the time should never
be greater than 59. How can we use modulo % to accomplish this?

Examples:

stopWatch(0); // => '00:00:00'
stopWatch(4); // => '00:00:04'
stopWatch(128); // => '00:02:08'
stopWatch(1234); // => '00:20:34'
stopWatch(3612); // => '01:00:12'
stopWatch(7640); // => '02:07:20'
stopWatch(86400); // => '24:00:00'
stopWatch(86522); // => '24:02:02'
stopWatch(99999); // => '27:46:39'
***********************************************************************/




//w4d3_pset
//5_nickname.js

/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/

function nickname(name) {
  var vowels = "aeiou";
  var vowelCount = 0;

  for (var i = 0; i < name.length; i++) {
    var char = name[i];

    if (vowels.indexOf(char) > -1) {
      vowelCount += 1;

      if (vowelCount === 2) {
        var slice = name.slice(0, i + 1);
        return slice.toUpperCase() + "-" + slice.toUpperCase();
      }
    }
  }

  return name.toUpperCase() + "-" + name.toUpperCase();
}



// time: 2:32
// rating: not bad now that I know to include vowel counter

// function nickname(name) {
//   var vowels = "aeiou";
//   var vowelCount = 0;
//
//   for (var i = 0; i < name.length; i++) {
//     var char = name[i];
//
//     if (vowels.indexOf(char) > -1) {
//       vowelCount += 1;
//
//       if (vowelCount === 2) {
//         var slice = name.slice(0, i + 1);
//         return slice.toUpperCase() + "-" + slice.toUpperCase();
//       }
//     }
//   }
//
//   return name.toUpperCase() + "-" + name.toUpperCase();
// }
//
// console.log(nickname('manuel')); // => 'MANU-MANU'
// console.log(nickname('pikachu')); // => 'PIKA-PIKA'
// console.log(nickname('bootcamp')); // => 'BOO-BOO'
// console.log(nickname('bob')); // => 'BOB-BOB'


//w4d3_pset
//6_tally_count.js

/***********************************************************************
Write a function tallyCount(array) that takes in an array of strings.
The function should return an object containing a tally count of the
strings in the array.

Examples:

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }

var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }
***********************************************************************/

// time: 00:53
// rating: very easy now that I know I can just push in "I" and not 1

// function tallyCount(array) {
//   var obj = {};
//
//   for (var i = 0; i < array.length; i++) {
//     var str = array[i];
//
//     if (obj[str] === undefined) {
//       obj[str] = "I";
//     } else {
//       obj[str] += "I";
//     }
//   }
//
//   return obj;
// }
//
// var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
// console.log(tallyCount(arr1)); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
//
// var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
// console.log(tallyCount(arr2)); // => { x: 'III', y: 'II', z: 'I' }

//w4d4_pset
//3_opposing_sums.js

/***********************************************************************
Write a function `opposingSums(array)` that takes in an array of numbers
and returns a new array containing half the number of elements. Assume
the `array` contains an even number of elements.

The first element of the new array should be the sum between the 1st and
last element of the original `array`. The second element of the new array
should be the sum between the 2nd and 2nd to last element. The third
element of the new array should be the sum between the 3rd and 3rd to
last element... etc.

Examples:

var arr1 = [3, 2, 11, 4, 7, 9];
opposingSums(arr1); // => [ 12, 9, 15 ]

var arr2 = [1, 2, 3, 4]
opposingSums(arr2); // => [ 5, 5 ]
***********************************************************************/


function opposingSums(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var ele1 = array[i];
    var ele2 = array[array.length - 1 - i];
    var sum = ele1 + ele2;

    if (i < (array.length - 1 - i)) {
      newArray.push(sum);
    }
  }

  return newArray;
}

//time: 1:47
//rating: easy now that I know I don't want indices to cross over

// function opposingSums(array) {
//   var newArr = [];
//
//   for (var i = 0; i < array.length; i++) {
//     var num1 = array[i];
//     var num2 = array[array.length - 1 - i];
//
//     if (i < (array.length - 1 - i)) {
//       newArr.push(num1 + num2);
//     }
//   }
//
//   return newArr;
// }
//
// var arr1 = [3, 2, 11, 4, 7, 9];
// console.log(opposingSums(arr1)); // => [ 12, 9, 15 ]
//
// var arr2 = [1, 2, 3, 4]
// console.log(opposingSums(arr2)); // => [ 5, 5 ]

//w4d4_pset
//4_addition_sequence.js

/***********************************************************************
Write a function `additionSequence(array, seq)` that takes in an array
of numbers and a sequence of numbers. The function should return a new
array where numbers of the original array are added to the numbers in
the sequence.

See the following example.

array = [3, 2, 5, 4, 2, 1, 10];
sequence = [2, 4, 6];

array:    3 2  5 4 2 1 10
sequence: 2 4  6 2 4 6  2
result:   5 6 11 6 6 7 12


Examples:

var arr1 = [3, 2, 5, 4, 2, 1, 10];
var seq1 = [2, 4, 6];
additionSequence(arr1, seq1);
// => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2] => [ 5, 6, 11, 6, 6, 7, 12 ]

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var seq2 = [1, 2];
additionSequence(arr2, seq2); // => [ 2, 4, 4, 6, 6, 8, 8 ]
***********************************************************************/

// time: 8:30
// tricky, even though I've done this before

// function additionSequence(array, seq) {
//   var newArr = [];
//
//   for (var i = 0; i < array.length; i++) {
//     var num = array[i];
//     var arrayIndex = i;
//     var seqIndex = i % seq.length;
//
//     var num = array[arrayIndex];
//     var seqNum = seq[seqIndex];
//     var sum = num + seqNum;
//     newArr.push(sum);
//   }
//
//   return newArr;
// }

// var arr1 = [3, 2, 5, 4, 2, 1, 10];
// var seq1 = [2, 4, 6];
// console.log(additionSequence(arr1, seq1));
//
// var arr2 = [1, 2, 3, 4, 5, 6, 7];
// var seq2 = [1, 2];
// console.log(additionSequence(arr2, seq2))

//w4d4_pset
//6_flatten.js

/***********************************************************************
A 1-dimensional array is also known as a flat array.
Write a function `flatten(data)` that accepts a single parameter. The
function should take in an array of any dimension and return the 1-dimensional
version of that array. Solve this recursively.

HINTS:
 - if the parameter is not an array, then we have reached the base case
 - we can use `Array.isArray(data)` to check if data is an array:
      Array.isArray([1,2,3]); //=> true
      Array.isArray(42); //=> false

EXAMPLES:
var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
flatten(array1); // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

var array2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
flatten(array2); // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

flatten('base case'); // => [ 'base case' ]

ANOTHER HINT:
From the last example, you may be confused. We said that the function takes
in an array as a parameter, but we passed it a string?!?
If data is not an array, then we can consider it as a 0-dimensional array.

    0-dimensional array: 'some data'
    1-dimensional array: ['some data']
    2-dimensional array: [['some data']]
    3-dimensional array: [[['some data']]]

This line of thinking will help you frame the recursion
in your brain. (programmer.mind === 'blown')
***********************************************************************/

//w4d5_pset
//3_isogram_matcher.js

/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
***********************************************************************/

function isogramMatcher(word1, word2) {
  var firstNum = 0; //1
  var secondNum = 0;

  for (var i = 0; i < word1.length; i++) {
    var char1 = word1[i];  // n
    var index1 = i;  // 1
    var index2 = word2.indexOf(char1); // -1

    if (index2 > -1 && index1 === index2) { // true
      firstNum += 1; // firstNum = 1
    } else if (index2 > -1 && index1 !== index2) {
      secondNum += 1;
    }
  }

  return [firstNum, secondNum];
}












// time: 3:00
// rating: fairly straightforward

// function isogramMatcher(word1, word2) {
//   var num1 = 0;
//   var num2 = 0;
//
//   for (var i = 0; i < word1.length; i++) {
//     var char1 = word1[i];
//     var index1 = i;
//     var index2 = word2.indexOf(char1);
//
//     if (word2.indexOf(char1) > -1 && index1 === index2) {
//       num1 += 1;
//     } else if (word2.indexOf(char1) > -1 && index1 !== index2) {
//       num2 += 1;
//     }
//   }
//
//   return [num1, num2];
// }

// console.log(isogramMatcher("an", "at")); //=> [1, 0]
// console.log(isogramMatcher("or", "go")); //=> [0, 1]
// console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
// console.log(isogramMatcher("home", "dome")); //=> [3, 0]
// console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
// console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]





//w4d5_pset
//4_second_largest.js

/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the second largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

Examples:

secondLargest([3, 1, 5, 4, 7]) => 5;
secondLargest([10, 7]) => 7;
secondLargest([10]) => -1;
secondLargest([]) => -1;
***********************************************************************/

// time: 2:20
// rating: straightforward now that I know the strategy

// function secondLargest(array) {
//   var largest = -1;
//   var secondLargest = -1;
//
//   for (var i = 0; i < array.length; i++) {
//     var num = array[i];
//
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest) {
//       secondLargest = num;
//     }
//   }
//
//   return secondLargest;
// }

// console.log(secondLargest([3, 1, 5, 4, 7])) //=> 5;
// console.log(secondLargest([10, 7])) //=> 7;
// console.log(secondLargest([10])) //=> -1;
// console.log(secondLargest([])) //=> -1;

//final_eval
//5_is_power_of_two.js

/**************************************************************************************
Write a function `isPowerOfTwo(num)` that takes in a number and returns a boolean indicating
whether or not the number is a power of two.

The powers of two are 1, 2, 4, 8, 16, 32, 64, ... etc

Examples:

isPowerOfTwo(1);  // => true
isPowerOfTwo(32); // => true
isPowerOfTwo(12); // => false
isPowerOfTwo(33); // => false
isPowerOfTwo(-8); // => false

Difficulty: Medium
*************************************************************************************/

function isPowerOfTwo(num) {
  var exp = 1;

  while (exp <= num) {    // use a while loop not a for loop?
    exp = exp * 2;

    if (exp === num) {
      return true;
    } else if (num === 1) {
      return true;
    }
  }

  // for (var i = 0; i < num; i++) {    // makes no sense
  //   exp = exp * 2;
  //
  //   if (exp === num) {
  //     return true;
  //   } else if (num === 1) {
  //     return true;
  //   }
  // }

  return false;
}

// console.log(isPowerOfTwo(1));  // => true
// console.log(isPowerOfTwo(32)); // => true
// console.log(isPowerOfTwo(12)); // => false
// console.log(isPowerOfTwo(33)); // => false
// console.log(isPowerOfTwo(-8)); // => false



//final_eval
//6_are_coprime.js

/**************************************************************************************
Write a function `areCoprime(num1, num2)` that takes in two numbers and returns a boolean
indicating whether or not the given numbers are coprime. Two numbers are said to be coprime
if the only common factor between them is the number 1.

For example,
  16 and 25 are coprime because 1 is the only number that divides both of them
  14 and 21 are not coprime because 7 divides both of them

Examples:

areCoprime(16, 25); // => true
areCoprime(15, 14); // => true
areCoprime(14, 21); // => false
areCoprime(15, 6);  // => false
areCoprime(15, 5);  // => false
areCoprime(5, 15);  // => false

Difficulty: Medium
*************************************************************************************/

function areCoprime(num1, num2) {
  var array = []; // as the loop progresses, add in all the factors of both. 1 will definitely be inside.

  for (var i = 1; i < num1 * num2; i++) {  // generating list of numbers from 1 to num1 * num2
    if (num1 % i === 0 && num2 % i === 0) {  // check if it's a factor of both numbers
      array.push(i);
    }
  }

  return array.length === 1; // will return true if the only thing in array is 1.
}

// console.log(areCoprime(16, 25)); // => true
// console.log(areCoprime(15, 14)); // => true
// console.log(areCoprime(14, 21)); // => false
// console.log(areCoprime(15, 6));  // => false
// console.log(areCoprime(15, 5));  // => false
// console.log(areCoprime(5, 15));  // => false



//final_eval
//7_shopping_cart_cost.js

/**************************************************************************************
Write a function `shoppingCartCost(cart, prices)` that takes in two objects:
 - an object representing items and their quantities in a shopping cart
 - an object representing items and their prices

The function should return the total cost of items in the shopping cart.

Examples:

var prices = {bread: 4, butter: 6, milk: 3, eggs: 7, celery: 1};
var cart1 = {bread : 2, milk: 1, eggs : 1};
var cart2 = {milk: 2, celery: 5};

shoppingCartCost(cart1, prices); // => 18
shoppingCartCost(cart2, prices); // => 11

Difficulty: Medium
*************************************************************************************/

function shoppingCartCost(cart, prices) {
  var totalCost = 0;

  for (var item in cart) {
    var num = cart[item];
    var price = prices[item];
    var cost = num * price;
    totalCost += cost;
  }

  return totalCost;
}

var prices = {bread: 4, butter: 6, milk: 3, eggs: 7, celery: 1};
var cart1 = {bread : 2, milk: 1, eggs : 1};
var cart2 = {milk: 2, celery: 5};

// console.log(shoppingCartCost(cart1, prices)); // => 18
// console.log(shoppingCartCost(cart2, prices)); // => 11



//final_eval
//8_pyramid_scheme.js

/**************************************************************************************
Write a function `pyramidScheme(base)` that takes in an array of numbers representing
the base of a pyramid. The function should return a two-dimensional array representing
the completed pyramid. To generate an element of the next level of the pyramid,
we sum the elements below and to the left and below and to the right.

For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:

          85
        37  48
      15  22  26
   5   10   12   14
 2   3    7    5    9

Example:

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
p1 // =>
 [
   [ 85 ],
   [ 37, 48 ],
   [ 15, 22, 26 ],
   [ 5, 10, 12, 14 ],
   [ 2, 3, 7, 5, 9 ]
 ]

var p2 = pyramidScheme([2, 2, 2, 2]);
p2 // =>
 [
   [ 16 ],
   [ 8, 8 ],
   [ 4, 4, 4 ],
   [ 2, 2, 2, 2 ]
 ]


Hint:
  array.unshift is a method we can use to add an element to the front of an array:
    var arr = ['b', 'c'];
    arr.unshift('a');
    arr; // => [ 'a', 'b', 'c' ]

Difficulty: Hard
*************************************************************************************/

function makeNextBase(base) {
  var nextBase = []; // 4, 4, 4

  for (var i = 0; i < base.length - 1; i++) { // i is the index of each element in array
    var num1 = base[i]; // first 2
    var num2 = base[i + 1]; // second 2
    var sum = num1 + num2; // 2 + 2 = 4
    nextBase.push(sum); // puts a 4 into the new array
  }

  return nextBase; // [4, 4, 4]
}

//

function pyramidScheme(base) {
  var pyramid = []; //empty array which will contain other arrays

  while (base.length >= 1) {
    pyramid.unshift(base);
    base = makeNextBase(base);
  }

  // for (var i = 0; base.length >= 1; i++) { // we will keep repeating this loop until the base only has 1 thing inside
  //   pyramid.unshift(base); // push in the first base [2, 2, 2, 2]
  //   base = makeNextBase(base); // redefine var base into [4, 4, 4] before repeating loop
  // }

  return pyramid;
}

// console.log(pyramidScheme([2, 2, 2, 2]))
