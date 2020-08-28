// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// //generate password function
function generatePassword() {
  var pass = [];
  var passwordLength = passLength();
  while (pass.length < passwordLength) {
    pass = pass.concat(selectChar());
  }
  return pass.join("");
}

// call user to select the length of characters they want
function passLength() {
  charLength = prompt("Please select a password range between 8 and 128");

  while (charLength < 8 || charLength > 128) {
    alert("Please enter a valid password range")
    charLength = prompt("Please select a password range between 8 and 128");
  }
  return Number(charLength);
}

// call user to select types of characters they want in their password

function selectChar() {
  var selector = [];
  var upperCase = confirm("Do you want your password to include upper case letters?");
  var lowerCase = confirm("Do you want your password to include lower case letters?");
  var numbers = confirm("Do you want your password to include numbers?")
  var symbols = confirm("Do you want your password to include symbols")

  // validate the character choices
  if (upperCase === true) {
    selector.push(myUpperCase());
  } else {
    console.log("No upper case letters selected");
  }

  if (lowerCase === true) {
    selector.push(myLowerCase());
  } else {
    console.log("No lower case letters selected");
  }

  if (numbers === true) {
    selector.push(num());
  } else {
    console.log("No numbers selected");
  }

  if (symbols === true) {
    selector.push(symbol());
  } else {
    console.log("No symbols selected");
  }

  if (upperCase != true && lowerCase != true && numbers != true && symbols != true) {
    alert("You must select at least one selector")
    return;
  }
  return selector;

}

// set values for upper case letters

function myUpperCase() {
  var uppCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var ran = uppCase[Math.floor(Math.random() * uppCase.length) + 1]

  return ran;
}

// set values for lower case letters
function myLowerCase() {
  var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var rand = lowCase[Math.floor(Math.random() * lowCase.length) + 1];

  return rand;
}

// set values for numbers
function num() {
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var rand = number[Math.floor(Math.random() * number.length) + 1];

  return rand;
}

// set values for symbols
function symbol() {
  var sym = ["!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    ",",
    "-",
    ".",
    "/",
    ";",
    ":",
    "<",
    ">",
    "=",
    "?",
    "@",
    "[",
    "]",
    "_",
    "{",
    "}",
    "|",
    "~",
    '"',
    "'"
  ]
  var rand = sym[Math.floor(Math.random() * sym.length) + 1];
  return rand;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);