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
