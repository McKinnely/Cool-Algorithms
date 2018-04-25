function myArray(arr, destination) 
{
if (destination.length == arr.length) 
{
console.log(arr.length);
console.log(destination.length);
} 
else
{
console.log("Error: Second array isn't big enough.");
}
for (var index = 0; index < arr.length; index++)
{
destination[index] = arr[index];
}
console.log(destination);
}


myArray([3,4,5,6,7], [2,2,2,8, 5]);