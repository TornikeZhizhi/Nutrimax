


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


// about slider

$(document).ready(function() {

  $('.about_content_tabs a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 500);
    e.preventDefault();
  });
});



// our team


$(document).ready(function() {

    

    $(".our_team_info a span:first-child").mouseenter(function(){

        $(this).find("img").attr("src","images/convert_yellow.png")
    })

    $(".our_team_info a span:first-child").mouseleave(function(){

        $(this).find("img").attr("src","images/convert_grey.png")
    })




});


//products


$(document).ready(function() {
    $(".table_header").on("click",function(){
        $(this).parent().find(".table_content").slideToggle();
    })

    $(".product_box img").on("click",function(){
       location.assign("products_inside.html");
    })

})





//farmers



$(document).ready(function() {
    $(".advice_main_info_box").mouseenter(function(){
           $(this).find(".advice_info_box").slideDown()
           $(this).find(".advice_tex_box").css("background","#F5C400")

    })

     $(".advice_main_info_box").mouseleave(function(){
           $(this).find(".advice_info_box").slideUp()
           $(this).find(".advice_tex_box").css("background","#fff")
    })

})


// products insied

$(document).ready(function() {
    $(".tabs_info").each(function(index){

        $(this).on("click",function(){
             $(".products_main_info_row").css("display","none");
             $(".products_main_info_row").eq(index).css("display","flex") 
        })

    })


})



// services

$(document).ready(function(){

    $(".service_icon").each(function(index){
        $(this).on("click",function(){

            $(".service_wrapp").css("display","none"); 
           $(".service_wrapp").eq(index).css("display","block"); 

        })
    })



})

