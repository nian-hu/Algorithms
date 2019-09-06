// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('potato', 'listen') => false

function anagrams(str1, str2) {
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!obj[char]) {
      obj[char] = 0;
    }
    obj[char] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!obj[char]) {
      obj[char] = 0;
    }
    obj[char] -= 1;
  }

  return Object.values(obj).every(num => num === 0)
}

console.log(anagrams('listen', 'silent'))
console.log(anagrams('potato', 'listen'))

























// function anagrams(str1, str2) {
//     let obj = {};

//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         if (!obj[char]) {
//             obj[char] = 0;
//         }
//         obj[char] += 1;
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         if (!obj[char]) {
//             obj[char] = 0;
//         }
//         obj[char] -= 1;
//     }

//     return Object.values(obj).every(number => number === 0);
// }

// anagrams('listen', 'silent')

// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. Make sure that 
// `merge` is defined on the window. Do NOT call the built-in 
// `Array.prototype.sort` method in your implementation.
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

Array.prototype.mergeSort = function (callback) {
    if (callback === undefined) {
        callback = (a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else if (a === b) {
                return 0;
            }
        }
    }

    if (this.length <= 1) return this;

    let midpoint = Math.floor(this.length / 2);
    let left = this.slice(0, midpoint).mergeSort(callback);
    let right = this.slice(midpoint).mergeSort(callback);

    return merge(left, right, callback)
}

function merge(left, right, callback) {
    if (callback === undefined) {
        callback = (a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else if (a === b) {
                return 0;
            }
        }
    }

    let merged = [];

    while (left.length && right.length) {
        if (callback(left[0], right[0]) === 1) {
            merged.push(right.shift());
        } else {
            merged.push(left.shift());
        }
    }

    return merged.concat(left).concat(right);
}

[2, 3, 1, 4, 8, 5].mergeSort()

// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

function binarySearch(sortedArray, target) {
    if (sortedArray.length === 0) return -1;

    const midpoint = Math.floor(sortedArray.length / 2);
    const left = sortedArray.slice(0, midpoint);
    const right = sortedArray.slice(midpoint + 1);

    if (sortedArray[midpoint] === target) {
        return midpoint;
    } else if (sortedArray[midpoint] > target) {
        return binarySearch(left, target);
    } else if (sortedArray[midpoint] < target) {
        subanswer = binarySearch(right, target)
        if (subanswer === -1) {
            return -1;
        } else {
            return subanswer + midpoint + 1;
        }
    }
}

// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

Array.prototype.bubbleSort = function (callback) {
    if (callback === undefined) {
        callback = (a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    let arr = this.slice();     // you have to do this .slice apparently in order to dupe array
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {              // grabbed undefined and swapped that - infinite loop!
            if (callback(arr[i], arr[i + 1]) === 1) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                sorted = false;
            }
        }
    }

    return arr;
}


// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

Array.prototype.quickSort = function (callback) {
    if (this.length <= 1) return this;
    let pivot = this[0];

    if (callback === undefined) {
        callback = (a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    let left = [];
    let right = [];

    for (let i = 1; i < this.length; i++) {
        if (callback(pivot, this[i]) === 1) {
            left.push(this[i]);
        } else {
            right.push(this[i]);
        }
    }

    return left.quickSort(callback).concat([pivot]).concat(right.quickSort(callback))
}

// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
// Do NOT use the built-in `Array.prototype.sort`.

// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(string, alphabet) {
    if (alphabet === undefined) alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let str = string.slice();
    let chars = str.split("");

    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < chars.length - 1; i++) {
            if (alphabet.indexOf(chars[i]) > alphabet.indexOf(chars[i + 1])) {
                [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]]
                sorted = false;
            }
        }
    }

    return chars.join("");
}

// Write a recursive function `primeFactorization(num)` that returns the prime
// factorization of a given number. Assume num > 1
//
// primeFactorization(12) => [2,2,3]

function primeFactorization(num) {
    for (let i = 2; i < num; i++) {
        let fact = i;
        if (num % fact === 0) {
            let otherFact = (num / fact);
            return primeFactorization(fact).concat(primeFactorization(otherFact))
        }
    }

    return [num]
}

// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

function stringIncludeKey(string, key) {
    if (key.length === 0) return true;

    nextKeyChar = key[0];
    keyIndex = string.indexOf(nextKeyChar);

    if (keyIndex === -1) return false;
    return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1))
}

// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of the
// array and any interior arrays. A deep duplication means that the array itself,
// as well as any nested arrays (no matter how deeply nested) are duped and are
// completely different objects in memory than those in the original array.

function deepDup(arr) {
    let duped = [];

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (Array.isArray(ele)) {
            duped.push(deepDup(ele));
        } else {
            duped.push(ele);
        }
    }

    return duped;
}

// deepDup([1, 2, [3, 4]])

// Write a recursive function, `factorialsRec(num)`, that returns the first 
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
    if (num === 1) return [1];

    let prevArr = factorialsRec(num - 1);
    let prevNum = prevArr[prevArr.length - 1];
    let newNum = prevNum * (num - 1);

    prevArr.push(newNum);
    return prevArr;
}

// factorials_rec(1) // 1
// factorials_rec(2) // 1
// factorials_rec(3) // 2 x 1 = 2[1, 1, 2]
// factorials_rec(4) // 3 x 2 x 1 = 6[1, 1, 2, 6]
// factorials_rec(6) //[1, 1, 2, 6, 24, 120]

// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

function digitalRoot(num) {
    if (num < 10) return num;
    return digitalRoot(digitalRoot(Math.floor(num / 10)) + num % 10);
}


// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {
    if (n === 1) return 2;
    let nthEven = 2 * n;
    return nthEven + firstEvenNumbersSum(n - 1);
}

// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

function fibsSum(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return (fibsSum(n - 2) + 1) + fibsSum(n - 1)
}


// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

function transpose(arr) {
    let newArr = [];

    for (let col = 0; col < arr[0].length; col++) {
        let newRow = [];

        for (let row = 0; row < arr.length; row++) {
            newRow.push(arr[row][col])
        }

        newArr.push(newRow)
    }

    return newArr;
}

// Write an `Array.prototype.myRotate(times)` method which rotates the array by 
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]

Array.prototype.myRotate = function (times = 1) {
    let rotateIndex = times % this.length;
    let rotated = this.slice(rotateIndex).concat(this.slice(0, rotateIndex));
    return rotated;
}

// Write an `Array.prototype.dups` method that will return an object containing 
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

Array.prototype.dups = function () {
    let count = {};
    let dups = {};

    this.forEach((ele, idx) => {
        count[ele] = count[ele] || [];
        count[ele].push(idx);
    })

    Object.keys(count).forEach((key) => {
        if (count[key].length > 1) {
            dups[key] = count[key];
        }
    })

    return dups;
}


// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function () {
    let flattened = [];

    this.forEach((ele) => {
        if (ele instanceof Array) {
            flattened = flattened.concat(ele.myFlatten());
        } else {
            flattened.push(ele);
        }
    })

    return flattened;
}

// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`
// "abcd".mySlice(0, 2) => 'ab'

String.prototype.mySlice = function (startIdx, endIdx) {
    if (endIdx === undefined || endIdx > this.length) endIdx = this.length;
    let sliced = "";

    for (let i = startIdx; i < endIdx; i++) {
        sliced += this[i];
    }

    return sliced;
}

// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

Function.prototype.myBind = function (context, ...bindArgs) {
    let that = this;

    return function (...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs));
    }
}

// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// thepassed-in object as `this`, also passing the arguments array. Do NOT use the
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods 
// in your implementation.

Function.prototype.myApply = function (context, argsArr = []) {
    return this.bind(context)(...argsArr);
}

// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.

Function.prototype.myCall = function (context, ...args) {
    return this.bind(context)(...args);
}

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        callback(ele);
    }
}

// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

Array.prototype.myFilter = function (callback) {
    let filtered = [];

    this.myEach((ele) => {
        if (callback(ele)) filtered.push(ele);
    })

    return filtered;
}

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

Array.prototype.myReduce = function (callback, acc) {
    if (acc === undefined) {
        acc = this[0];
        arr = this.slice(1);
    } else {
        arr = this.slice();
    }

    arr.myEach((ele) => {
        acc = callback(acc, ele)
    })

    return acc;
}

// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

Array.prototype.myEvery = function (callback) {
    let every = true;

    this.myEach((ele) => {
        if (!callback(ele)) every = false;
    })

    return every;
}

// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

Array.prototype.mySome = function (callback) {
    let some = false;

    this.myEach((ele) => {
        if (callback(ele)) some = true;
    })

    return some;
}

// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

Array.prototype.myReject = function (callback) {
    let newArr = [];

    this.myEach((ele) => {
        if (!callback(ele)) newArr.push(ele);
    })

    return newArr;
}

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

Function.prototype.myCurry = function (numArgs) {
    let args = [];
    let that = this;

    return _myCurried = function (arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return that(...args)
        } else {
            return _myCurried;
        }
    }
}


// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
// You may NOT use `Object.create` or `Object.assign` or modify the `__proto__`
// property of any object directly.

Function.prototype.inherits = function (ParentClass) {
    function Surrogate() { };
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}