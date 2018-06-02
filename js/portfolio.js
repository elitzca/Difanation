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
	}
}
