function noOdds(arr) 
{
   arr = arr.filter(function (val)
   {
        if(val % 2 == false)
        {
            return val;
        }
   });

   console.log(arr);
}

noOdds([1,2,3,4,5,6]);