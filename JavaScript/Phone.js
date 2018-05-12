/*
Phone Number Formatting

Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
Examples

[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ➞ "(123) 456-7890"

[5, 1, 9, 5, 5, 5, 4, 4, 6, 8] ➞ "(519) 555-4468"

[3, 4, 5, 5, 0, 1, 2, 5, 2, 7] ➞ "(345) 501-2527"

Notes

Don't forget the space after the closing parenthese.
*/



function formatPhoneNumber(numbers) 
{
   numbers =  "(" + numbers.splice(0,3).join("") + ") " + numbers.splice(0, 3).join("") +  "-" + numbers.splice(0).join("");
   return numbers;
}

 formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);