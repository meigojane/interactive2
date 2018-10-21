document.addEventListener("DOMContentLoaded", function () {
    console.log('Your document is ready!');
    circleEventListener("circle1", "eye1", "opening", "hover");
    circleEventListener("circle2", "left_front_leg", "kick", "hover");
    circleEventListener("circle2", "dust_s", "kick_s", "hover");
    circleEventListener("circle2", "dust_m", "kick_m", "hover");
    circleEventListener("circle4", "head", "hidden", "hover");
    circleEventListener("circle4", "head2", "show", "hover");
    // circleEventListener("circle5", "ele_head", "shake", "hover");
    circleEventListener("circle5", "elephant", "hidden", "hover");
    circleEventListener("circle5", "running", "show", "hover");
    circleEventListener("circle6", "elephant", "push2", "hover");
    circleEventListener("circle6", "push", "show", "hover");
    circleEventListener("circle6", "push", "pushing", "hover");
    circleEventListener("circle6", "elephant", "push2", "hover");
    circleEventListener("circle7", "lil_ele", "show", "hover");
    circleEventListener("circle7", "lil_one", "show", "hover");
    circleEventListener("circle8", "ear", "waving", "hover");
    circleEventListener("circle3", "tail", "hidden", "hover");
    circleEventListener("circle3", "tail_2", "show", "hover");
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