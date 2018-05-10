/*
Trll Dnld Trmp!

Congratulations, you're the new CTO of Twitter and have received direct orders from Jack Dorsey to troll Donald Trump as an April fools joke. You must remove every vowel from his tweets, neutralizing his online presence for the day.
Rules

Create a function that takes a string as an argument. 
Return a new string with all vowels removed.

Examples

"I have never seen a thin person drinking Diet Coke." ➞ " hv nvr sn  thn prsn drnkng Dt Ck.")

"We're gonna build a wall!" ➞ "W'r gnn bld  wll!"

"Happy Thanksgiving to all--even the haters and losers!" ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

Notes

"y" is not considered a vowel.
Expect a valid string for all test cases.
*/

function silenceTrump(str) 
{
		return console.log(str.replace(/[aeiuoAEIOU]/, ""));
}


silenceTrump("prInting and waAlking");