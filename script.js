$(document).ready(function(){
    $("html, body").css("opacity", "1");
    $(".hero h1, .hero a").css({
        "opacity" : "1",
        "transform": "translateY(0)"
    });
});
$(".hamburger-menu input").click(function(){
    $("nav ul").toggleClass("click");
});

$(".nav-link").click(function(e){
    let tujuan = $(e.target).attr("href");

    $("html, body").animate({
        scrollTop: $(tujuan).offset().top - 40
    }, 850, "easeInOutExpo");

    e.preventDefault();
});

$(window).scroll(function(){
    let myScroll = $(this).scrollTop();
    
    if (myScroll > $("#services").offset().top - 150){
        $(".service").each(function(i){
            setTimeout(function(){
                $(".service").eq(i).css({
                    "transform": "translateY(0)",
                    "opacity": "1"
                });
            }, (400 * i));
        });
    }
    if (myScroll > $("#items1").offset().top - 50){
        $("#items1 .card").each(function(i){
            setTimeout(function(){
                $("#items1 .card").eq(i).css({
                    "transform": "translateY(0)",
                    "opacity": "1"
                });
            }, (400 * i));
        });
    }
    if (myScroll > $("#items2").offset().top - 200){
        $("#items2 .card").each(function(i){
            setTimeout(function(){
                $("#items2 .card").eq(i).css({
                    "transform": "translateY(0)",
                    "opacity": "1"
                });
            }, (400 * i));
        });
    }

    if (myScroll > $("#article1").offset().top - 200){
        $("#article1 .right-article, #article1 .left-article").css({
            "transform": "translateX(0)",
            "opacity": "1"
        });
    }
    if (myScroll > $("#article2").offset().top - 200){
        $("#article2 .right-article, #article2 .left-article").css({
            "transform": "translateX(0)",
            "opacity": "1"
        });
    }
    if (myScroll > $("#sponsor").offset().top - 350){
        $("#sponsor").css("opacity", "1");
    }
    
})