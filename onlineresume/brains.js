$(document).ready(function(){
    $("p, li").hover(function(){
        $(this).animate({
            fontSize:"1.25em"
        },1000)
    })
    $("p, li").mouseleave(function(){
        $(this).animate({
            fontSize:"1em"
        },1000)
    })
})