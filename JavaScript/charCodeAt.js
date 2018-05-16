/*
Find the Characters Counterpart Char Code

Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
Examples

Given that:

- "A" char code is: 65

- "a" char code is: 97

"A" ➞ 97

"a" ➞ 65

Notes

    The argument will always be a single character.
    Not all inputs will have a counterpart (e.g. numbers), in which case return the inputs char code.
*/

function counterpartCharCode(char) 
{

	if(char === char.toLowerCase())
	{
        char = char.toUpperCase();
	    return console.log(char.charCodeAt(char));
	}
	else if(char === char.toUpperCase())
	{
	char = char.toLowerCase();
	return console.log(char.charCodeAt(char));
	}
}
counterpartCharCode("5");


