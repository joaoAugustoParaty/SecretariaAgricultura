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

/*--------------Produto CAROUSEL--------------*/
$('.produto-carousel').owlCarousel({
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

 // Products
const categories = document.querySelectorAll('.categories li');

function activeCategory(){
    categories.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

categories.forEach(n => n.addEventListener('click', activeCategory))

//Filter
const itemBox = document.querySelectorAll('.products__item .item__box')
let value = 'todos os produtos';
filter(value);

function filter(value){
    itemBox.forEach(show =>{
        show.style.display = 'none';
        if(show.getAttribute('data-id') ===value || value == 'todos os produtos'){
            show.style.display = 'flex';
        }
    })
}

categories.forEach(item =>{
    item.addEventListener('click', ()=>{
    let value = item.textContent;
    filter(value);
    })
})