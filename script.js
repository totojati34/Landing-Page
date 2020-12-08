$(".hamburger-menu input").click(function(){
    $("nav ul").toggleClass("click");
});

$(".nav-link").click(function(e){
    let tujuan = $(e.target).attr("href");

    $("html, body").animate({
        scrollTop: $(tujuan).offset().top - 50
    }, 650, "easeInOutExpo");


    e.preventDefault();
});