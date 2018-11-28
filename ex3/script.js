function clock() {
	var time = new Date(),
   
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    
    seconds = time.getSeconds();

	document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock1')[0].innerHTML = harold(hours+2) + ":" + harold(minutes) + ":" + harold(seconds);
document.querySelectorAll('.clock2')[0].innerHTML = harold(hours+4) + ":" + harold(minutes) + ":" + harold(seconds);
document.querySelectorAll('.clock3')[0].innerHTML = harold(hours-2) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock4')[0].innerHTML = harold(hours-4) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock5')[0].innerHTML = harold(hours-6) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock6')[0].innerHTML = harold(hours-8) + ":" + harold(minutes) + ":" + harold(seconds);
	document.querySelectorAll('.clock3')[0].innerHTML = harold(hours-10) + ":" + harold(minutes) + ":" + harold(seconds);
	function harold(standIn) {
    	if (standIn < 10) {
      	standIn = '0' + standIn
    	}
    	return standIn;
  	}
}

setInterval(clock, 1000);

