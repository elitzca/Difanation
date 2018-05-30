function toggleMenu() {
    //console.log("i work");
    document.getElementById("menu-dropdown").classList.toggle('active')
}

document.addEventListener('click', closeMenu)

function closeMenu (e) {
    //console.log(e.target.classList);
    if (!e.target.classList.contains("toggle-btn") && !e.target.classList.contains("span-lines") ){
        //console.log("success");
        document.getElementById("menu-dropdown").classList.toggle('active')
    }
}
