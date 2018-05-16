/*
Reverse the Order of Words with Five Letters or More

Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Examples

"Reverse" ➞ "esreveR"

"This is a typical sentence." ➞ "This is a lacipyt .ecnetnes"

"The dog is big." ➞ "The dog is big."

Notes

You can expect a valid string to be provided for each test case.
*/

function reverse(str) 
{
    var newString = str.split(" ");

    if(str.includes(" "))
     {
        newString = newString.map(function (val)
                    {
                        if(val.length >= 5)
                        {
                           val = val.split("").reverse().join("");
                        }
                        return val;
                    });
        return console.log(newString.join(" "));
     }
     else if(str.length >= 5)
     {
        return str.split("").reverse().join("");
     } 
}

reverse("sen");