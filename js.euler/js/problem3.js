function problem3()
{
	// input taken from user in index.html
	var input = document.getElementById("p2_input").value;

	// prime factors of input
	var factors = [];

	// used for determining if a number is a factor
	var flag = false;

	// loop through all input values
	for (i=0; i<input; i++) 
	{

		if( input%i ==0 )
		{
			if( (i > 5) && (i%2==0 || i%3==0 || i%5==0))
			{
				continue;
			}

			if(factors.length == 0 && i != 1)
			{
					factors.push(i);
					continue;
			}

			for (j=0; j < factors.length; j++)
			{
				if ( i % factors[j] == 0 )
				{
					
					flag = false;
					break;
				}
				else
				{
					flag = true;
				}
			}

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

