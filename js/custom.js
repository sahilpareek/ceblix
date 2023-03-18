
$('#').owlCarousel({
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            margin:15
        },
        480:{
            items:2,
            margin:15
        },
        991:{
            items:3,
            margin:15
        },
        1450:{
            items:4
        }
    }
})

$(document).ready(function () {
    $(window).scroll(function () {
        var sticky = $('.header-sec'),
            scroll = $(window).scrollTop();
        if (scroll >= 1) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });
});


/*

$(window).scroll(function(){
    if($(document).scrollTop() > 60) {
        $("header").addClass("header-chng");
    }
    else{
        $("header").removeClass("header-chng");
    }
})*/


