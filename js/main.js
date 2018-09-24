


$(document).ready(function(){

$('.news_slide').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.partners_slide').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
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


$(document).ready(function(){
   $(".about_content_tabs").each(function(index){
        $(this).on("click",function(){
            var leng = $(".about_content_tabs").length 
            $(".about_content_tabs").removeClass("active");
            for (var i = 0; i < leng; i++) {
             $(".about_content_tabs").eq(i).find("img").attr("src","images/ab_icon"+ i +".svg") 
            }
            $(this).find("img").attr("src","images/icon"+ index +".svg");
            $(this).addClass("active");
        })
   }) 
})






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

    $(".add_basket").on("click",function(){
       location.assign("basket.html");
    })

})


// products_responsive

$(window).on("load", function(){

    if ($(window).width() <= 991 ) {

        $(document).ready(function(){
             $(".animal_tab_pannel_tittle").on("click",function(){
                 $(".animals_tab_panel_resp").slideToggle()
             })

             $(".tabs_active_info").on("click",function(){
            $(".tabs_info_wrapper").slideToggle();
    })


        $(".tabs_info").on("click",function(){
            var text =  $(this).text()
               $(".tabs_active_info").text(text);
               $(".tabs_info_wrapper").slideUp();
       
            })
        })
    }
})




// products_inside_responsive



//farmers



$(document).ready(function() {
    $(".advice_main_info_box").mouseenter(function(){
           $(this).find(".advice_info_box").slideDown()
           $(this).find(".advice_tex_box").css("background","#F5C400")

    })

     $(".advice_main_info_box").mouseleave(function(){
           $(this).find(".advice_info_box").slideUp(150)
           $(this).find(".advice_tex_box").css("background","#fff")
    })

})


// products insied

$(document).ready(function() {
    $(".tabs_info").each(function(index){

        $(this).on("click",function(){

             $(".products_main_info_row").css("display","none");
             $(".products_main_info_row").eq(index).css("display","flex");

             $(".tabs_info").removeClass("active");
             $(this).addClass("active");



        })

    })



    // $(".tabs_info").on("click",function(){



    // })


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



//footer form



$(document).ready(function(){

 
 $(".admin_tab").on("click",function(event){

    $(".admin_tab").css("border-color","#23170E");
    $(".sell_tab").css("border-color","transparent");

    $(".footer_form").css("display","none");
    $(".footer_form").eq(0).css("display","block");

 })

  $(".sell_tab").on("click",function(event){

    $(".sell_tab").css("border-color","#23170E");
    $(".admin_tab").css("border-color","transparent");

    $(".footer_form").css("display","none");
    $(".footer_form").eq(1).css("display","block");

 })




$(".city_box span").each(function(index){

    $(this).on("click",function(){

        $(".diler_content").css("display","none");
        $(".diler_content").eq(index).css("display","flex");

         $(".diler_up_box").find("img").removeClass("active");
    })
 

})


$(".diler_up_box").on("click",function(){

    $(".diler_content").slideUp()

    $(this).find("img").addClass("active");

})

})



//responsive menu


$(document).ready(function(){

    $(".hamburger_box").on("click",function(){
       $(".resp_navigation_fluid").addClass("active") 
    })


    $(".close_icon").on("click",function(){

           $(".resp_navigation_fluid").removeClass("active") 

    })

})










