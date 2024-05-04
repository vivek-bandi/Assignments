/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); //remove punctuations and lowerCase each letter
  str = str.replace(/ /g, ""); //remove spaces from all spaces g->global
  let str2 = str.split("").reverse().join(""); //split it into array & reverse it & join it (totally reverse the str)
  return str === str2;
  // if (str.length == 0) {
  //   return true;
  // }
  // for (let i = 0; i < str.length; i++) {
  //   if (str.charAt(i) != str2.charAt(i)) {
  //     return false;
  //   }
  //   if (i == str.length - 1) {
  //     return true;
  //   }
  // }
}

module.exports = isPalindrome;
