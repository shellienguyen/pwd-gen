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

// Arry to hold user preferences
// Default all password criteria to true and length to 12
var userInput = [
   { length: 12,
     upper: true,
     lower: true,
     special: true,
     number: true }
]

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
