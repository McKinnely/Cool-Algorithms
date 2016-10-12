function mutation(input){
	
	var first  = input[0].toLowerCase().split("");
	var second = input[1].toLowerCase().split("");

	var match = 0;

    var size = input[0].length;
    var counter = 0;
    var secondCounter = 0;
    var secondSize = input[1].length;

    while(size > counter)
    {
    	while(secondSize > secondCounter)
    	{
	         if (first[counter] == second[secondCounter])
	         {
	         	return true;
	         }

       	 secondCounter++;
        }

 
    counter++;
    }
	//console.log(first);
	return false;
	
}
 
mutation(["HellhYo", "hohhey"]);