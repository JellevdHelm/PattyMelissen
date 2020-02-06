let counter = 1;

setInterval(function() {
	if (counter <= 1) {
		document.getElementById('slide1').className = "show";
		document.getElementById('slide2').className = "hide";
		document.getElementById('slide3').className = "hide";
		document.getElementById('slide4').className = "hide";
		counter++;
	}
	else if (counter <= 2) {
		document.getElementById('slide1').className = "hide";
		document.getElementById('slide2').className = "show";
		document.getElementById('slide3').className = "hide";
		document.getElementById('slide4').className = "hide";
		counter++;
	}
	else if (counter <= 3) {
		document.getElementById('slide1').className = "hide";
		document.getElementById('slide2').className = "hide";
		document.getElementById('slide3').className = "show";
		document.getElementById('slide4').className = "hide";
		counter++;
	}
	else if (counter <= 4) {
		document.getElementById('slide1').className = "hide";
		document.getElementById('slide2').className = "hide";
		document.getElementById('slide3').className = "hide";
		document.getElementById('slide4').className = "show";
		counter = 1;
	}
	else {
		document.getElementById('slide1').className = "hide";
		document.getElementById('slide2').className = "hide";
		document.getElementById('slide3').className = "hide";
		document.getElementById('slide4').className = "show";
		counter = 1;
	}
}, 3000);