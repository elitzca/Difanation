$(document).ready(function() {

    //Get the header height
    var headerHeight = $('#menu-dropdown').outerHeight();

    $('.slide-section').click(function(e) {

        var linkHref = $(this).attr('href');
        //console.log(linkHref);
        //console.log($(linkHref).offset().top);
        //console.log(headerHeight);

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});

function fetchServices () {
    fetch("http://elitzca.eu/kea/wordpress/wp-json/wp/v2/posts?_embed")
        .then(e => e.json())
        .then(showServices)
}

function showServices(data){
    //console.log(data);
    data.forEach(showSingleService)
}

function showSingleService (aService) {
    //console.log(aService._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url);
    let template = document.querySelector("#svtemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = aService.title.rendered;

    clone.querySelector(".description").innerHTML = aService.content.rendered;

    clone.querySelector("img").setAttribute("src", aService._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url)

    let servicelist = document.querySelector("#servicelist");
    servicelist.appendChild(clone);
}

fetchServices();







