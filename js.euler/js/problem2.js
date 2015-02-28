function problem2() {
	

	var input = document.getElementById("p2_input").value;
	var sum = 0;

	i = 1;
	j = 2;
	k = 3;
	while (j < input) {

		if ( j%2==0) {
			sum = sum + j;
		}

		i = k;
		k = k+j;
		j = i;
	}
	document.getElementById("p2").innerHTML = "The sum is: " + sum;
}
