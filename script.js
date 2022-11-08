// Assignment code here

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters.")

  var upperCase = confirm("Would you like uppercase letters?")

  var lowerCase = confirm("Would you like lowercase letters?")

  var numbers = confirm("Would you like numbers?")

  var special = confirm("Would you like special characters?")

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
