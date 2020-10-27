$(document).ready(function(){

    $nav =$('.nav');
    $toggleCollapse = $('.toggle-collapse');


/* Click Event on the toggle */
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})


// click to scroll up


$('.move-up span').click(function(){
    $('html, body').animate({
        scrollTop:0
    },1000);
})


});







