'use strict'

function getSecondLargest(nums) 
{

  nums = nums.sort(function(a, b){return b-a});
      let counter = 1;
      //console.log(counter);

  for(let val of nums)
      {
         //console.log(nums[counter]);
        if(nums[counter] < val)
        {
         return nums[counter];
        }
        counter++;
      } 
 
}

   getSecondLargest([1,2,3,9,6,4,5]);