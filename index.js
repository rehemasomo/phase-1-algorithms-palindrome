function isPalindrome(str) {
  // Write your algorithm here
  // Convert the string to lowercase
  str = str.toLowerCase();
  
  // Reverse the string
  const reversedStr = str.split('').reverse().join('');
  
  // Check if the original string is equal to the reversed string
  return str === reversedStr;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("madam")); 
  console.log(isPalindrome("robot"));
 }
module.exports = isPalindrome;
