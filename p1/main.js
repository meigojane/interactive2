// document.addEventListener("DOMContentLoaded", function(){
// 	comma();
// });

window.addEventListener("load", function(){
	periodcomma();
	quote();
	yay();
	question();
});

function periodcomma(){
	var periodcomma = document.getElementsByClassName("periodcomma");
	periodcomma[0].addEventListener("click", function(){
		console.log("periodcomma");
	
		var periodcomma =document.getElementsByClassName("periodcomma");
		periodcomma[0].style.transform="scale(1.5,1.5)";



		var A =document.getElementsByClassName("A");
		A[0].style.transform="translate(500px, 420px)";
		var B =document.getElementsByClassName("B");
		B[0].style.transform="translate(200px,120px)";
		var C =document.getElementsByClassName("C");
		C[0].style.transform="translate(250px,400px)";
		var D =document.getElementsByClassName("D");
		D[0].style.transform="translate(-100px,340px)";
		var E =document.getElementsByClassName("E");
		E[0].style.transform="translate(340px, -79px)";

		var F =document.getElementsByClassName("F");
		F[0].style.transform="translate(137px, 119px)";
		var G =document.getElementsByClassName("G");
		G[0].style.transform="translate(180px, -50px)";
		var H =document.getElementsByClassName("H");
		H[0].style.transform="translate(-80px, 10px)";
		var I =document.getElementsByClassName("I");
		I[0].style.transform="translate(250px,-100px)";
		var J =document.getElementsByClassName("J");
		J[0].style.transform="translate(250px,-100px)";
		var K =document.getElementsByClassName("K");
		K[0].style.transform="translate(250px,-100px)";
		var L =document.getElementsByClassName("L");
		L[0].style.transform="translate(-180px,-150px)";
		var M =document.getElementsByClassName("M");
		M[0].style.transform="translate(230px, -100px)";
		var N =document.getElementsByClassName("N");
		N[0].style.transform="translate(250px,-100px)";
		var O =document.getElementsByClassName("O");
		O[0].style.transform="translate(-176px, -212px)";
		var P =document.getElementsByClassName("P");
		P[0].style.transform="translate(-180px, -130px)";
		var Q =document.getElementsByClassName("Q");
		Q[0].style.transform="translate(350px, -139px)";
		var R =document.getElementsByClassName("R");
		R[0].style.transform="translate(250px, -550px)";
		var S =document.getElementsByClassName("S");
		S[0].style.transform="translate(-50px, -200px)";
		var T =document.getElementsByClassName("T");
		T[0].style.transform="translate(-90px, -600px)";
		var U =document.getElementsByClassName("U");
		U[0].style.transform="translate(550px, -482px)";
		var V =document.getElementsByClassName("V");
		V[0].style.transform="translate(285px, -250px)";
		var W =document.getElementsByClassName("W");
		W[0].style.transform="translate(10px, -450px)";
		var X =document.getElementsByClassName("X");
		X[0].style.transform="translate(-10px, -400px)";
		var Y =document.getElementsByClassName("Y");
		Y[0].style.transform="translate(300px, -650px)";
		var Z =document.getElementsByClassName("Z");
		Z[0].style.transform="translate(-40px, -677px)";

	});
}

function quote(){
	var quote = document.getElementsByClassName("quote");
		quote[0].addEventListener("click", function(){
			console.log("quote");

			var quote =document.getElementsByClassName("quote");
			quote[0].style.transform="scale(1.5,1.5)";

		});
		
}

function yay(){
	var yay = document.getElementsByClassName("yay");
	yay[0].addEventListener("click", function(){
		console.log("yay");

		var yay =document.getElementsByClassName("yay");
		yay[0].style.transform="scale(1.5,1.5)";


		var alphabet = document.getElementsByClassName("alphabet");
		for(var i = 0; i < alphabet.length; i++){
			alphabet[i].classList.add("hidden");

		}
		var number = document.getElementsByClassName("number");
		for(var j = 0; j < number.length; j++){
		if (number[j].style.display === "block") {
        number[j].style.display = "none";
    	} else {
        number[j].style.display = "block";
    	}

		}
			
		

		

	});
}


function question(){
	var question = document.getElementsByClassName("question");
	question[0].addEventListener("click", function(){
		console.log("question");

		var question =document.getElementsByClassName("question");
		question[0].style.transform="scale(1.5,1.5)";




	});

}














