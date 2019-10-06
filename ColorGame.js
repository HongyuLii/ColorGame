 var numSquares = 6;
 var color = [];
 var pickedColor;
 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.getElementById("colordisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var modeBtns = document.querySelectorAll(".mode");

 init();

 function init(){
 	for(var i=0; i<modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent == "Easy"){
				numSquares = 3;
			} else{
				numSquares = 6;
			}
			reset();
		});
	}

	for(var i=0; i < squares.length; i++){
	//add initial colors to squares
	//add click listeners to squares
		squares[i].addEventListener("click", function(){

		 	var clickColor = this.style.backgroundColor;

		 	if(clickColor == pickedColor){
		 		messageDisplay.textContent = "Correct!";
		 		resetButton.textContent = "Play Again?";
		 		changeColors(clickColor);
		 		h1.style.backgroundColor = clickColor;
		 	} else{
		 		this.style.backgroundColor = "#232323";
		 		messageDisplay.textContent="try again";
		 	}
		});
	}
	reset();
 }




function reset(){
	color = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//CHJANGE COLOR DISPLAY TO PICKED COLOR
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = " ";

	for(var i=0; i<squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = color[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	
	h1.style.backgroundColor = "steelblue";
}

 resetButton.addEventListener("click", function(){
	reset();
  })




function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
	
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to aray
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256)
	//green 0-255
	var g=Math.floor(Math.random()*256)
	//blue  0-255
	var b=Math.floor(Math.random()*256)

	return "rgb(" + r + ", " + g + ", " + b + ")";

}

