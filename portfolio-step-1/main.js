$(document).ready(function(){
    $(".accordion h3:first").addClass("active");
    $(".accordion a:not(:first)").hide();

    $(".accordion h3").click(function(){

        $(this).next("a").slideToggle("fast")
        .siblings("a:visible").slideUp("fast");
        $(this).toggleClass("active");
        $(this).siblings("h3").removeClass("active");
     });
 
 });
