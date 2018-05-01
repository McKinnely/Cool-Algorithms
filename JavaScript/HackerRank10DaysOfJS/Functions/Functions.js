
/*
 * Create the function factorial here
 */

function factorial(num)
{
    var holder = num;
    for(var counter = 1; counter < num; counter++)
        {
            holder*= counter;   
        }
    return(holder);
}