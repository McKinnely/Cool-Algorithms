
/*
Get Word Count

Create a function that takes a string and returns the word count. The string will be a sentence.
Examples

'Just an example here move along' ➞ 6

'This is a test' ➞ 4

'What an easy task, right' ➞ 5
*/
function countWords(str) 
{
	str = str.split(" ").length;
 return(str);
}

countWords("I love sprinting");