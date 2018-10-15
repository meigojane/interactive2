document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
    circle2();
    circle7();
 });

function circle2(){
    let circle = document.getElementsByClassName("circle2");
    circle[0].addEventListener("mouseover", kick);
    circle[0].addEventListener("mouseleave", kickOff);
}

function kick(){
    let element = document.getElementById("left_front_leg");
    element.classList.add("kick");
}

function kickOff(){
    let element = document.getElementById("left_front_leg");
    element.classList.remove("kick");
}

function circle7(){
    let circle = document.getElementsByClassName("circle7");
    circle[0].addEventListener("mouseover", born);
    circle[0].addEventListener("mouseleave", unborn);
}

function born(){
    let element = document.getElementById("lil_ele");
    element.classList.remove("hidden");
}

function unborn(){
    let element = document.getElementById("lil_ele");
    element.classList.add("hidden");
}