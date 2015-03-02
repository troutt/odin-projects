function problem3()
{
	// input taken from user in index.html
	var input = document.getElementById("p3_input").value;

	// prime factors of input
	var factors = [];

	// used for determining if a number is a factor
	var flag = false;

	// loop through all input values
	for (i=0; i<input; i++) 
	{

		// true when i is a factor of input
		if( input%i ==0 )
		{
			// ignore factors of 2, 3 or 5 once five is passed
			if( (i > 5) && (i%2==0 || i%3==0 || i%5==0))
			{
				continue;
			}

			// ignoring factor of 1 and setting first factor
			if(factors.length == 0 && i != 1)
			{
					factors.push(i);
					continue;
			}

			// loops through all the known factors
			for (j=0; j < factors.length; j++)
			{
				// checking to see if j is a factor of i
				if ( i % factors[j] == 0 )
				{
					//if i isn't a unique factor leave
					flag = false;
					break;
				}
				else
				{
					// is true when i is a factor
					flag = true;
				}
			}

			// adds i to the factor list when its a prime
			if (flag) 
			{
				factors.push(i);
				flag = false;
			}
			
		}
	}

	//changes <p> tag text with an id of p2 in index.html
	document.getElementById("p3").innerHTML = "The largest integer is: " + factors.toString();

}

