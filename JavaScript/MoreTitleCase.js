/*
Capitalize the Names

Create a function that takes an array of names and returns an array with the first letter capitalized.
Examples

["mavis", "senaida", "letty"] ➞ ["Mavis", "Senaida", "Letty"]

["samuel", "MABELLE", "letitia", "meridith"] ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

["Slyvia", "Kristal", "Sharilyn", "Calista"] ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

Notes

    Don't change the order of the original array.
    Notice in the second example above, "MABELLE" is returned as "Mabelle".
    */

function capMe(arr) 
{
   arr = arr.map(function (val)
            {   val  = val.toLowerCase();
                return val.charAt(0).toUpperCase() + val.slice(1); 
            });
   return arr;
}

capMe(["maDs", "senaida", "letty"]);

