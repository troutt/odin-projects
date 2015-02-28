function problem1() {
	

	var input = document.getElementById("p1_input").value;
	var sum = 0;

	for (var i = 0; i < input; i++) {

		if ( i%3==0 || i%5==0) {
			sum = sum + i;
		}
	}

	document.getElementById("p1").innerHTML = "The sum is: " + sum;
}
