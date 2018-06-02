let arrow = document.querySelector("#arrow-portfolio");
let hidden = document.querySelector(".hide");

arrow.addEventListener('click', showMore);
function showMore(){
hidden.classList.remove("hide");
	arrow.classList.add("rotate");
	arrow.addEventListener('click', showLess);
	function showLess(){
		hidden.classList.add("hide");
		arrow.classList.remove("rotate");
		location.reload();

let clickCounter = 0;
let moreOreLess = document.querySelector("#moreOrLess");

arrow.addEventListener('click', addOne);
function addOne(){
	console.log("clicks = " + clickCounter);
	clickCounter++;
}

arrow.addEventListener('click', showMore);
function showMore(){

	if(clickCounter == 1  ){
hidden.classList.remove("hide");
	arrow.classList.add("rotate");
		moreOreLess.textContent = "SEE LESS"
	}


	arrow.addEventListener('click', showLess);
	function showLess(){
		if(clickCounter == 2){
		hidden.classList.add("hide");
		arrow.classList.remove("rotate");
			moreOreLess.textContent = "SEE MORE"
		clickCounter = 0;
	//	location.reload();
	}
	}
}
