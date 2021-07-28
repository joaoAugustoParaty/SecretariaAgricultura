$(window).on("load",function (){
    /*----------Preloader---------------- */
$(".preloader").fadeOut("slow")
});

$(document).ready(function(){
    /*--------------Navbar Shrink------------*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")
        }
    })
    /*--------------FEATURES CAROUSEL--------------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    })
    /*------------------Page Scrolling- ScrollIt---------------*/
    $.scrollIt({
        topOffset: -50
    });
     /*-------------------Navbar Collapse-----------------------*/
     $(".nav-link").on("click", function(){
         $(".navbar-collapse").collapse("hide")
     })

     
})