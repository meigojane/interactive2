
$(document).ready(function () {
  //your code here

	$('.bush').click(function() {
	    $('.bush').addClass('hide');
	    $('.bkg').addClass('hide');
	    $('.fire').removeClass('hide');
	});

	$('.fire').click(function() {
	    $('.fire').addClass('hide');
	    $('.bkg1').addClass('hide');
	    $('.glass').removeClass('hide');
	    
	});

	
	$('.glass').click(function() {
	    $('.bush').removeClass('hide');
	    $('.bkg').removeClass('hide');
	    $('.glass').addClass('hide');
	    $('.bkg1').removeClass('hide');

	});

});

let easel = document.querySelector('#outerEasel')


easel.addEventListener('click',click)

let input = document.querySelector('#user-caption')



function click(){
	let newEasel = document.createElement('div')
	newEasel.classList.add('scaleDown')
	newEasel.innerHTML = '<img class="frame1" src="assets/web_window.jpg">'

	easel.appendChild(newEasel)

	easel = newEasel
}

function doAPrint() {

	let name = document.createElement('h1')
	name.innerText = input.value

	document.body.appendChild(name)
    window.print();
}
