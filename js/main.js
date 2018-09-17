


$(window).ready(function(){

$('.news_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.partners_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


})



// Home Services


$(document).ready(function(){

    $(".laboratory_tittle").on("click",function(){

        $(".farmers_tittle").removeClass("active")
        $(this).addClass("active");

        $(".farmers_cont").removeClass("deactive active");
        $(".lab_cont").removeClass("active deactive");

        $(".lab_cont").addClass("active");
        $(".farmers_cont").addClass("deactive");
        

    });


    $(".farmers_tittle ").on("click",function(){

        $(".laboratory_tittle").removeClass("active")
        $(this).addClass("active");

        $(".farmers_cont").removeClass("deactive active");
        $(".lab_cont").removeClass("active deactive")

        $(".lab_cont").addClass("deactive");
        $(".farmers_cont").addClass("active");

    });





})