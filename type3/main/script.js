document.addEventListener("DOMContentLoaded", function () {
    console.log('Your document is ready!');
    circleEventListener("circle2", "left_front_leg", "kick", "hover");
    circleEventListener("circle7", "lil_ele", "show", "toggle");
    // circle2();
    // circle7();
});

function circleEventListener(listener, target, className, event){
    //listener for the element you want to hover or click
    //target for the element you wish to do animation
    //className is the name of the class you are adding on
    //event: hover or toggle
    var circle = document.getElementById(listener);
    console.log(circle);
    if(!circle){
        circle = document.getElementsByClassName(listener)[0];
        console.log(circle);
    }
    var element = document.getElementById(target);
    if(!element){
        element = document.getElementsByClassName(target)[0];
    }
    if(event === "hover"){
        circle.addEventListener("mouseover", eventOn);
        circle.addEventListener("mouseleave", eventOff);
    } else if(event === "toggle"){
        circle.addEventListener("click", eventToggle);
    }

    function eventOn() {
        element.classList.add(className);
    }

    function eventOff() {
        element.classList.remove(className);
    }

    function eventToggle(){
        element.classList.toggle(className);
    }
}


//old code

// function circle2() {
//     let circle = document.getElementsByClassName("circle2");
//     circle[0].addEventListener("mouseover", kick);
//     circle[0].addEventListener("mouseleave", kickOff);
// }

// function kick() {
//     let element = document.getElementById("left_front_leg");
//     element.classList.add("kick");
// }

// function kickOff() {
//     let element = document.getElementById("left_front_leg");
//     element.classList.remove("kick");
// }

// function circle7() {
//     let circle = document.getElementsByClassName("circle7");
//     circle[0].addEventListener("mouseover", born);
//     circle[0].addEventListener("mouseleave", unborn);
// }

// function born() {
//     let element = document.getElementById("lil_ele");
//     element.classList.remove("hidden");
// }

// function unborn() {
//     let element = document.getElementById("lil_ele");
//     element.classList.add("hidden");
// }