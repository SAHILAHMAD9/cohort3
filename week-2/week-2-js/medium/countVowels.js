/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const vowels = 'aeiouAEIOU';

function countVowels(str) {
  let count = 0;
  // Your code here
  str = str.split("");
  str.forEach(item => {
    if (vowels.includes(item)) count++;
  });
  return count;
}

console.log(countVowels('hello'));
 

module.exports = countVowels;