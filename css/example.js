let kvadrats = document.querySelector("nav");
let clickCounter = 0;

kvadrats.addEventListener('click', addOne);
function addOne(){
	console.log("clicks = " + clickCounter);
	clickCounter++;
}
kvadrats.addEventListener('click', changeColor);
function changeColor(){
	if(clickCounter == 1  ){
		console.log("its + 1");
		kvadrats.style.backgroundColor = "red";
		/*function changeit(){
			console.log("makeCSSwork");
			kvadrats.classList.toggle('changeitCSS');*/
		}
	if(clickCounter == 2){
		console.log("its + 2");
		kvadrats.style.backgroundColor = "orange";

	}
	if(clickCounter == 3 ){
		console.log("its + 2");
		kvadrats.style.backgroundColor = "yellow";

	}
	if(clickCounter == 4 ){
		console.log("its + 2");
		kvadrats.style.backgroundColor = "green";

	}if(clickCounter == 5 ){
		console.log("its + 2");
		kvadrats.style.backgroundColor = "blue";

	}
	if(clickCounter == 6 ){
		console.log("its + 2");
		kvadrats.style.backgroundColor = "purple";

	}







	if(clickCounter == 7){
		console.log("its + 2");
		kvadrats.style.backgroundColor = "black";
		clickCounter=0

	}
}
