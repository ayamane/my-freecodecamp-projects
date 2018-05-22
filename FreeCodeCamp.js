'use strict';

// var myString = 'hello';
// var newString = [];
// for (var i = myString.length - 1; i >= 0; i--){
//   newString += myString[i];
// }
//
// console.log(newString);

// function factorialize(num) {
//   var factorial = 1;
//
//   for (var i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }
//
// console.log(factorialize(8));

function palindrome(str) {
  // Good luck!
  var pattern = /\W+|_/g;
  //var testString = 'D0es this hav3 $ymbols?';
  var strippedString = '';
  var reversedString = '';

  // console.log(testString.match(pattern));
  // console.log(pattern.test(testString));

  strippedString = /*str.replace(/\d+/g, "")*/ str.replace(pattern, "");

   //console.log(strippedString);

  for (var i = strippedString.length - 1; i >= 0; i--) {
    reversedString += strippedString[i];
  }

    console.log('Reversed: ' + reversedString.toLowerCase());
    console.log('Stripped: ' + strippedString.toLowerCase());

  if (reversedString.toLowerCase() === strippedString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

// palindrome tests
// console.log(palindrome("_eye"));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("eyes"));
// console.log(palindrome("A man, a plan, a canal, Panama!"));
// console.log(palindrome("Was it a car or a cat I saw?"));
// console.log(palindrome("Not a palindrome"));
// console.log(palindrome("No 'x' in Nixon"));

function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";

  if (words.length > 0) { longestWord = words[0]; }
  for (var i = 0; i < words.length; i++) {
    var testWord = words[i];

    if (testWord.length > longestWord.length) {
      longestWord = testWord;
    }
  }

  return longestWord.length;
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function titleCase(str) {
  var titleCasedSentance = "";
  var words = str.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    var tempWord = words[i].split();
    titleCasedSentance += words[i][0].toUpperCase() + words[i].substr(1, words[i].length - 1);
    if (i >= 0 && i < words.length - 1) {
      titleCasedSentance += " ";
    }
  }

  return titleCasedSentance;
}

//console.log(titleCase("I'm a little tea pot"));

function largestOfFour(arr) {
  var LargestNumbers = [];

  for (var i = 0; i < arr.length; i++) {
    LargestNumbers[i] = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > LargestNumbers[i]) {
        LargestNumbers[i] = arr[i][j];
      }
    }
  }
  return LargestNumbers;
}

// console.log(largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]])
// );

function confirmEnding(str, target) {
  if (str.length < target.length) { return false; }

  if (str.substr(str.length - target.length, str.length - 1) === target) {
    return true;
  } else {
    return false;
  }
}

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Connor", "n"));
// console.log(confirmEnding("Walking on water and developing software from a specification are easy", "specification"));
// console.log(confirmEnding("He has to give me a new name", "name"));
// console.log(confirmEnding("Open sesame", "same"));
// console.log(confirmEnding("Open sesame", "pen"));

function repeatStringNumTimes(str, num) {
  if (num <= 0) { return ""; }

  var newString = "";
  for (var i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

// console.log(repeatStringNumTimes("abc", 3));
// console.log(repeatStringNumTimes("*", 8));
// console.log(repeatStringNumTimes("abc", -2));

function truncateString(str, num) {
  if (str.length <= num) { return str; }

  var truncString = "";

  if (num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str.slice(0, num - 3) + '...';
  }
}

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var numArrays = arr.length / size;
  var start = 0;
  var end = size;

  for (var i = 0; i < numArrays; i++) {
    newArray.push(arr.slice(start, end));
    start += size;
    end += size;
  }

  return newArray;
}

function slasher(arr, howMany) {
  if (howMany > arr.length) {
    return [];
  }

  arr.splice(0, howMany)
  return arr;
}

function mutation(arr) {
  var testArr = arr[1].toLowerCase().split("");

  for (var i = 0; i < testArr.length; i++) {
    if (arr[0].toLowerCase().indexOf(testArr[i]) === -1) {
      return false;
    }
  }
  return true;
}

function bouncer(arr) {
  var result = arr.filter(
    function (value) {
      return value !== false && value !== ""
            && value !== null && value !== undefined
            && value !== 0 && !Number.isNaN(value);
    }
  );
  return result;
}

function destroyer(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

function rot13(str) {
  var decodedStr = "";

  for (var i = 0; i < str.length; i++) {
    var result = 0;
    var index = str.charCodeAt(i);

    if (index < 65 || index > 90) { // outside A->Z
      decodedStr += String.fromCharCode(index);
    } else {
      if (index - 13 < 65) {
        result = index - 65;
        result = 91 - (13 - result);
      } else {
        result = index - 13;
      }

      decodedStr += String.fromCharCode(result);
    }
  }

  return decodedStr;
}


module.exports = {
  truncateString,
  chunkArrayInGroups,
  slasher,
  mutation,
  bouncer,
  destroyer,
  getIndexToIns,
  rot13
}
