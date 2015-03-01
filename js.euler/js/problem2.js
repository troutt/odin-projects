function problem2() 
{
	
	// input taken from user in index.html
	var input = document.getElementById("p2_input").value;
	var sum = 0;

	// used to keep track of the fibonaci digits 
	i = 1;
	j = 2;
	k = 3;

	while (j < input) 
	{

		// true when j is an even number
		if ( j%2==0 ) 
			sum = sum + j;

		i = k;
		k = k+j;
		j = i;
	}

	//changes <p> tag text with an id of p2 in index.html
	document.getElementById("p2").innerHTML = "The sum is: " + sum;
}
