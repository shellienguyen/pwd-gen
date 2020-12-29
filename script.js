/*
PSEUDOCODES:
- When the user clicks on the "Generate Passord" button:
   - The following prompts will pop up asking the user to choose:
      1.) Length of password betwen 8-128 characters
      2.) Uppercase only, lowercase only, or mixed-case
      3.) Whether to include special characters
      4.) Whether to include numbers
- After each prompt, verify the user's input
- Save all user answers in an userInputArr
- Create:
   - Function to generate random lowercase
   - Function to generate random uppercase
   - Function to generate random number
   - Function to generate random special character
- Loop through until reaches password length
   - Call the above functions one by one to randonly generate characters
   - Append each newly generated character to the end of the genPassword variable
- When done, display the generated password to the screen
- Provide a copy button for the user to copy the password
*/

//////////////////////////
// Assignment code here //
//////////////////////////

// Array to hold user preferences
// Default all password criteria to true and length to 12
var userInput = [
   { length: 12,
     upper: true,
     lower: true,
     special: true,
     number: true }
]
// END OF DECLARING GLOBAL VARIABLES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to get and validate user input
var getUserInput = function() {

   // Asking the user for the password length
   // Do not allow a blank or a non-numeric answer; AND only allow a number between 8-128
   let pwdLength = window.prompt( "Enter a number between 8-128 for desired password length:" );
   while ( (( pwdLength < 8 ) || ( pwdLength > 128 )) || ( isNaN( pwdLength )) ){
      pwdLength = window.prompt( "Enter a number between 8-128: ");
   }
   pwdLength = parseInt( pwdLength );
   userInput[0] = pwdLength;

   // Asking the user for the case type preference
   let pwdCaseType = window.prompt( "Enter 1 for mixed-case, 2 for lowercase only, or 3 for uppercase only: ")
   while ( (( pwdCaseType < 1 ) || ( pwdCaseType > 3 )) || (isNaN( pwdCaseType )) ) {
      pwdCaseType = window.prompt( "Enter 1 for mixed-case, 2 for lowercase only, or 3 for uppercase only: ")
   }
   pwdCaseType = parseInt( pwdCaseType );
   switch( pwdCaseType ) {
      case 2:
         userInput[1] = false;
         userInput[2] = true;
         break;
      case 3:
         userInput[1] = true;
         userInput[2] = false;
         break;
      default:
         userInput[1] = true;
         userInput[2] = true;
         break;
   }

   // Asking whether the user wants to include special characters or not
   let pwdIncludeSpecialChars = window.prompt( "Enter 1 to INCLUDE special characters, enter 2 to EXCLUDE:" );
   while ( (( pwdIncludeSpecialChars < 1 ) || ( pwdIncludeSpecialChars > 2 )) || ( isNaN( pwdIncludeSpecialChars )) ){
      pwdIncludeSpecialChars = window.prompt( "Enter 1 to INCLUDE special characters, enter 2 to EXCLUDE: ");
   }
   pwdIncludeSpecialChars = parseInt( pwdIncludeSpecialChars );
   switch( pwdIncludeSpecialChars ) {
      case 2:
         userInput[3] = false;
         break;
      default:
         userInput[3] = true;
         break;
   }

   // Asking whether the user wants to include numbers or not
   let pwdIncludeNum = window.prompt( "Enter 1 to INCLUDE  numbers, enter 2 to EXCLUDE numbers:" );
   while ( (( pwdIncludeNum < 1 ) || ( pwdIncludeNum > 2 )) || ( isNaN( pwdIncludeNum )) ) {
      pwdIncludeNum = window.prompt( "Enter 1 to INCLUDE  numbers, enter 2 to EXCLUDE numbers:" );
   }
   pwdIncludeNum = parseInt( pwdIncludeNum );
   switch( pwdIncludeNum ) {
      case 2:
         userInput[4] = false;
         break;
      default:
         userInput[4] = true;
         break;
   }
   console.log( "0: " + userInput[0] );
   console.log( "1: " + userInput[1] );
   console.log( "2: " + userInput[2] );
   console.log( "3: " + userInput[3] );
   console.log( "4: " + userInput[4] );
}
// END OF getUserInput FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to randomly generate an uppercase letter
var genRandomUpper = function() {
   // In the UTF-16 character table, uppercase letters start at decimal value 65
   return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 );
}
// END OF genRandomUpper FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to randomly generate a lowercase letter
var genRandomLower = function() {
   // In the UTF-16 character table, lowercase letters start at decimal value 97
   return String.fromCharCode( Math.floor( Math.random() * 26 ) + 97 );
}
// END OF genRandomLower FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to randomly generate a special character
var genRandomSpecialChar = function() {
   var specialChars = "~`!@#$%^&*()_-+=[]{}\|';:,<.\>./?";
   // In the UTF-16 character table, lowercase letters start at decimal value 97
   return specialChars[ Math.floor( Math.random() * specialChars.length )];
}
// END OF genRandomLower FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to randomly generate a number
var genRandomNum = function() {
   // In the UTF-16 character table, numbers start at decimal value 47
   return String.fromCharCode( Math.floor( Math.random() * 10 ) + 48 );
}
// END OF genRandomNum FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Function to generate the password
var generatePassword = function() {
   var thePassword = "";
   var randomChar = "";

   // Loop through and add one character at a time until reaches password length
   for( var i = 0; i < userInput[0]; i++ ) {
      // Randomly generate a number to determine which charater type to generate next 
      var randomType = parseInt( String.fromCharCode( Math.floor( Math.random() * 4 ) + 48 ));

      switch( randomType ) {
         case 0:
            if ( userInput[1] ) {
               randomChar = genRandomUpper();
            }
            break;
         case 1:
            if ( userInput[2] ) {
               randomChar = genRandomLower();
            }
            break;
         case 2:
            if ( userInput[3] ) {
               randomChar = genRandomSpecialChar();
            }
            break;
         default:
            if ( userInput[4] ) {
               randomChar = genRandomNum();
            }
            break;
      }

      console.log( "randomType = " + randomType + "; i = " + i + "; char = " + randomChar );

      // Append the randomly generated character to the thePassword variable
      thePassword = thePassword + randomChar;
      console.log( "THE PASSWORD IS: " + thePassword );
   }

   return thePassword;
}
// END OF generatePassword FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get references to the #generate element
var generateBtn = document.querySelector( "#generate" );

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector( "#password" );

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener( "click", writePassword );

getUserInput();
writePassword();