let arrow = document.querySelector("#arrow-portfolio");
let hidden = document.querySelector(".hide");

arrow.addEventListener('click', showMore);
function showMore(){
hidden.classList.remove("hide");
}
