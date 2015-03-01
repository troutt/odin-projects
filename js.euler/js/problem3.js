function problem3()
{
	var input = 13195;

	var factors = [];

	
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
				document.write(i + " % " + j + " = " + i%factors[j] + " <br>");
				if ( (i % factors[j] == 0) )
				{
					
					factors.push(i);
				}
			}
			
		}
	}
	document.write(factors.toString());
	//changes <p> tag text with an id of p2 in index.html
	//document.getElementById("p3").innerHTML = "The largest integer is: " + factors.toString();

}

