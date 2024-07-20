let start = document.getElementById('start'); 
let stop = document.getElementById('stop'); 
let reset = document.getElementById('reset'); 

let hr = 0; 
let min = 0; 
let sec = 0; 
let mili = 0; 

start.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

stop.addEventListener('click', function () { 
	timer = false; 
}); 

reset.addEventListener('click', function () { 
	timer = false; 
	hr = 0; 
	min = 0; 
	sec = 0; 
	mili = 0; 
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 

function stopWatch() 
{ 
	if (timer) 
    { 
		mili++; 

		if (mili == 100)
        { 
			sec++; 
			mili = 0; 
		} 

		if (sec == 60) 
        { 
			min++; 
			sec = 0; 
		} 

		if (min == 60) 
        { 
			hr++; 
			min = 0; 
			sec = 0; 
		} 

		let hrString = hr; 
		let minString = min; 
		let secString = sec; 
		let miliString = mili; 

		if (hr < 10) 
        { 
			hrString = "0" + hrString; 
		} 

		if (min < 10) 
        { 
			minString = "0" + minString; 
		} 

		if (sec < 10) 
        { 
			secString = "0" + secString; 
		} 

		if (mili < 10) 
        { 
			miliString = "0" + miliString; 
		} 

		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = miliString; 
		setTimeout(stopWatch, 10); 
	} 
}
