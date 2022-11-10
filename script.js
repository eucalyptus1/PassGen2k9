// Assignment code here

var lowArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~" ,"`", "{", "}", "[", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"];

var chosenArr = [];

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters.")
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("You must enter a number between 8 and 128")
  }

  var upperCase = confirm("Would you like uppercase letters?")
  if (upperCase) {
    chosenArr.push(upArr);
  }

  var lowerCase = confirm("Would you like lowercase letters?")
  if (lowerCase) {
    chosenArr.push(lowArr);
  }

  var numbers = confirm("Would you like numbers?")
  if (numbers) {
    chosenArr.push(numbArr);
  }

  var special = confirm("Would you like special characters?")
  if (special) {
    chosenArr.push(specialArr);
  }

  console.log(chosenArr);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
