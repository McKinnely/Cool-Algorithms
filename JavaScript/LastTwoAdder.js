/*
return the Sum of the Two Smallest Numbers

Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers. No floats or empty arrays will be used in any of the test cases.
Examples

[19, 5, 42, 2, 77] ➞ 7

[10, 343445353, 3453445, 3453545353453] ➞ 3453455

[2, 9, 6, -1] ➞ 8

[879, 953, 694, -847, 342, 221, -91, -723, 791, -587] ➞ 563

[3683, 2902, 3951, -475, 1617, -2385] ➞ 4519

Notes

Don't count negative numbers.
*/

function sumTwoSmallestNums(arr) 
{
    arr = arr.filter(function(val){return val > 0});
	arr = arr.sort(function(a, b){return a-b});
    return(arr[0] + arr[1]);
}

sumTwoSmallestNums([19, 5, 42, 2, 77]);