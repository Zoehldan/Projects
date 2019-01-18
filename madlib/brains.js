$(document).ready(function(){
    $("#madbtn").click(function(){
        $("#lib").css({"fontSize":"0.1em","opacity":"0","backgroundSize":"100% 130%"});
        color=$("#color").val();
        superlative=$("#superlative").val();
        ad1=$("#ad1").val();
        bp1=$("#bp1").val();
        bp2=$("#bp2").val();
        noun=$("#noun").val();
        animal=$("#animal").val();
        ad2=$("#ad2").val();
        ad3=$("#ad3").val();
        ad4=$("#ad4").val();
        $("#lib").text("The "+color+" Dragon is the "+superlative+" Dragon of all. It has "+ad1+" "+bp1+", and a "+bp2+" shaped like a "+noun+". It loves to eat "+animal+", although it will feast on nearly anything. It is "+ad2+" and "+ad3+". You must be "+ad4+" around it, or you may end up as it`s meal!").show().animate({"fontSize":"1.5em","opacity":"1"})
    });
});
var color;
var superlative;
var ad1;
var bp1;
var bp2;
var noun;
var animal;
var ad2;
var ad3;
var ad4;