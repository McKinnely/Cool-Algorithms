/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
'use strict'

function confirmEnding(str, target) 
{
         //str  = str.split("");
            let lCFPsize = str.length -1;
            let lCSPsize = target.length -1;

            let lastCharFirtParameter    = str.charAt(lCFPsize);
            let lastCharSecondParameter  = target.charAt(lCSPsize);

if(lastCharFirtParameter == lastCharSecondParameter)
{
  console.log("True");
  return true;
}
  console.log("Nope");
  return false;


}



confirmEnding("Bastian", "n");
confirmEnding("Bastian is good for your health", "n");
confirmEnding("Bastiana likes to run alpha", "a");
confirmEnding("Bastian Googles", "n");

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
