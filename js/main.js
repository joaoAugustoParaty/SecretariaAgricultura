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

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 100, 100);
    counter("count2", 0, 100, 100);
    counter("count3", 0, 200, 200);
   
 });

 /*--------------TESTIMONIALS CAROUSEL--------------*/
 $('.noticia-carousel').owlCarousel({
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
})
