
$(document).ready(function () {
  //your code here

$('.fire').click(function() {
    $(this).addClass('hide');
});
$('.glass').click(function() {
    $('.glass').addClass('hide');
});

$('.bush').click(function() {
    $('.glass').removeClass('hide');
    $('.fire').removeClass('hide');
});


});

let easel = document.querySelector('#outerEasel')



function () click{
let newEasel = document.createElement('div')
newEasel.classList.add('scaleDown')
newEasel.innerHTML = '<img class="frame1" src="assets/web_window.jpg>'

easel.appendChild(newEasel)

easel = newEasel
}

