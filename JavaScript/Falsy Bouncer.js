
function bouncer(arr) 
{
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function (val)
  {
   return val !== false && val !== null && val !== 0 && val !== "" && val !== undefined  && val !== 'NaN';
  });
  console.log(arr);
}


bouncer([7,false, null, 0, "", undefined, NaN]);