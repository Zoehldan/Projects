$(document).ready(function(){
    if($("#p1turn").css("opacity")=="0.5"){

        $("#p1turn").css("opacity:1");
        $("#p2turn").css("opacity:0.5");
    }
    else if($("#p2turn").css("opacity")==0.5){
        
        $("#p2turn").css("opacity:1");
        $("#p1turn").css("opacity:0.5");
    }
    $("button").click(function(){
        $("").addClass("red")
        $("").addClass("black")
    })
})