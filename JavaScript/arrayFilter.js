
var oldArray = [1,2,3,4,5,6,7,8,9,11];
var newArray = oldArray.filter(function(val)
                               
{
 return val < 9;
});
console.log(newArray);
