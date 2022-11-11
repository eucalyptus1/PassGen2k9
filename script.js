// Assignment code here

var lowArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~" ,"`", "{", "}", "[", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"];

var chosenArr = [];

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters.")
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("You must enter a number between 8 and 128");
    return null;
  }

  var upperCase = confirm("Would you like uppercase letters?")
  if (upperCase) {
    chosenArr = upArr.concat(chosenArr)
    alert("Uppercase letters will be included.");
  }

  var lowerCase = confirm("Would you like lowercase letters?")
  if (lowerCase) {
    chosenArr = lowArr.concat(chosenArr)
    alert("Ok! Lowercase. Good choice.");
  }

  var numbers = confirm("Would you like numbers?")
  if (numbers) {
    chosenArr = numbArr.concat(chosenArr)
    alert("There's going to be numbers in there too.");
  }

  var special = confirm("Would you like special characters?")
  if (special) {
    chosenArr = specialArr.concat(chosenArr)
    alert("This password is going to be extra special now.");
  }

  if (!lowerCase && !upperCase && !number && !special) {
    alert("Your password can't be made out of air. You have to choose something!")
    return null;
  }

  var finalPassword = "";

  for (var i = 0; i < passLength; i++) {
    finalPassword = finalPassword + chosenArr[Math.floor(Math.random()* chosenArr.length)];
  }
  return finalPassword;
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
