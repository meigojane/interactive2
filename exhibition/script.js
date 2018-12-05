
$(document).ready(function () {
  //your code here

	$('.bush').click(function() {
	    $('.bush').addClass('hide');
	    $('.bkg').addClass('hide');
	    $('.infoB').addClass('hide');
	    $('.fire').removeClass('hide');
	    $('.infoF').removeClass('hide');
	});

	$('.fire').click(function() {
	    $('.fire').addClass('hide');
	    $('.bkg1').addClass('hide');
	    $('.infoF').addClass('hide');
	    $('.glass').removeClass('hide');
	    $('.infoG').removeClass('hide');

	    
	});

	
	$('.glass').click(function() {
	    $('.bush').removeClass('hide');
	    $('.bkg').removeClass('hide');
	    $('.glass').addClass('hide');
	    $('.bkg1').removeClass('hide');
	    $('.infoB').removeClass('hide');
	    $('.infoG').addClass('hide');

	});


	$('.fire').hover(function() {
		$('.infoF').fadeTo(100,0.8)
	},function(){
		$('.infoF').fadeTo(100,0)

	})
	$('.bush').hover(function() {
		$('.infoB').fadeTo(100,0.8)
	},function(){
		$('.infoB').fadeTo(100,0)

	})
	$('.glass').hover(function() {
		$('.infoG').fadeTo(100,0.8)
	},function(){
		$('.infoG').fadeTo(100,0)

	})

});

let easel = document.querySelector('#outerEasel')

if(easel) easel.addEventListener('click',click)

let input = document.querySelector('#user-caption')

let isFirstEasel = true
let theImageURL = 'assets/screen_eye.jpg'

function click(){
	let newEasel = document.createElement('div')
	newEasel.classList.add('scaleDown')
	newEasel.innerHTML = '<img class="frame1" src="'+theImageURL+'">'

	if(isFirstEasel){
		newEasel.classList.add('offset')
	}
	isFirstEasel = false

	easel.appendChild(newEasel)

	easel = newEasel
}

function doAPrint() {

	let name = document.createElement('h1')
	name.innerText = input.value

	document.body.appendChild(name)
    setTimeout(function(){
    	window.print();
    },1000)
}





function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();

    var img = document.createElement('img');
  
    theImageURL = window.URL.createObjectURL(ev.dataTransfer.files[0]);

    document.querySelector('.framebk1').src = theImageURL
    document.querySelector('.frame1').src = theImageURL

    // ev.target.appendChild(document.getElementById(data));
}
