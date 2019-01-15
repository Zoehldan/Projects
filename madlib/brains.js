$(document).ready(function(){
    $("button").click(function(){
        color=$("#color").val();
        superlative=$("#superlative").val();
        ad1=$("#ad1").val();
        bp1=$("#bp1").val();
        bp2=$("#bp2").val();
        noun=$("#noun").val();
        animal=$("#animal").val();
        ad2=$("#ad2").val();
        ad3=$("#ad3").val();
        getInfo("ad4");
        $("form").hide();
        $("form").hide();
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