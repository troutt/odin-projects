function problem1() 
{
	
	// input taken from user in index.html
	var input = document.getElementById("p1_input").value;
	var sum = 0;

	for (var i = 0; i < input; i++) 
	{

		//checks if i has a factor of 3 or 5
		if ( i%3==0 || i%5==0) 
			sum = sum + i;
	}

	//changes <p> tag text with an id of p2 in index.html
	document.getElementById("p1").innerHTML = "The sum is: " + sum;
}
