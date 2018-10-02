window.addEventListener("load", function(){
	periodcomma();
	quote();
	yay();
	question();
});

const alphabetArray = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z"
];

const translationArray = {
	"A": "500px, 420px",
	"B": "200px,120px",
	"C": "250px,400px",
	"D": "-100px,340px",
	"E": "340px, -79px",
	"F": "137px, 119px",
	"G": "180px, -50px",
	"H": "-80px, 10px",
	"I": "250px,-100px",
	"J": "250px,-100px",
	"K": "250px,-100px",
	"L": "-180px,-150px",
	"M": "230px, -100px",
	"N": "250px,-100px",
	"O": "-176px, -212px",
	"P": "-180px, -130px",
	"Q": "350px, -139px",
	"R": "250px, -550px",
	"S": "-50px, -200px",
	"T": "-90px, -600px",
	"U": "550px, -482px",
	"V": "285px, -250px",
	"W": "10px, -450px",
	"X": "-10px, -400px",
	"Y": "300px, -650px",
	"Z": "-40px, -677px"
};

function transformItem(alphabet, style, numbers){
	let element = document.getElementsByClassName(alphabet);
	switch(style){
		case "translate" :
			var config = (numbers)? `translate(${numbers})` : "";
			break;
		case "scale" :
			var config = (numbers)? `scale(${numbers})` : "";
			break;
	}	
	element[0].style.transform = config;
}

function periodcomma(){
	var periodcomma = document.getElementsByClassName("periodcomma");
	periodcomma[0].addEventListener("click", function(){
		reset();
		transformItem("periodcomma", "scale", "1.5,1.5");

		for(let i = 0; i < alphabetArray.length; i++){
			let alphabet = alphabetArray[i];
			transformItem(alphabet, "translate", translationArray[alphabet]);
		}

		var backButton = document.getElementById("specimenGrid");
		backButton.addEventListener("click", periodCommaBack);

	});
}

function periodCommaBack(){
	var backButton = document.getElementById("specimenGrid");
	transformItem("periodcomma", "scale");
	for(let i = 0; i < alphabetArray.length; i++){
		transformItem(alphabetArray[i], "translate");
	}
	backButton.removeEventListener("click", periodCommaBack);
}

function quote(){
	var quote = document.getElementsByClassName("quote");
		quote[0].addEventListener("click", function(){
			reset();
			console.log("quote");
			transformItem("quote", "scale", "1.5,1.5");
		});
}

function quoteBack(){
	transformItem("quote", "scale");
}

function yay(){
	var yay = document.getElementsByClassName("yay");
	yay[0].addEventListener("click", function(){
		reset();
		console.log("yay");

		/*transformItem("yay", "scale", "1.5,1.5");*/

		var alphabets = document.getElementsByClassName("alphabet");
		for(var i = 0; i < alphabets.length; i++){
			alphabets[i].classList.add("hidden");
		}

		var number = document.getElementsByClassName("number");
		for(let i = 0; i < number.length; i++){
			number[i].classList.remove("hidden");
		}

		var backButton = document.getElementById("specimenGrid");
		backButton.addEventListener("click", yayBack);
	});
}

function yayBack(){
	var backButton = document.getElementById("specimenGrid");
	var alphabets = document.getElementsByClassName("alphabet");
	var number = document.getElementsByClassName("number");
	transformItem("yay", "scale");
	for(let i = 0; i < alphabets.length; i++){
		alphabets[i].classList.remove("hidden");
	}
	for(let i = 0; i < number.length; i++){
		number[i].classList.add("hidden");
	}
	backButton.removeEventListener("click", yayBack);
}


function question(){
	var question = document.getElementsByClassName("question");
	question[0].addEventListener("click", function(){
		reset();
		console.log("question");
		transformItem("question", "scale", "1.5,1.5");
	});
}

function questionBack(){
	transformItem("question", "scale");
}

function reset(){
	periodCommaBack();
	quote();
	yayBack();
	questionBack();

}














