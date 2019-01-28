$(document).ready(function(){
    $("#minToYD").click(function(){
        minToYD();
    });
    $("#gratotal").click(function(){
        gratotal();
    });
    $("#bmi").click(function(){
        bmi();
    });
    $("#gToHM").click(function(){
        hToHM();
    });
});
var minToYD=function(){
    var input=$("#num1").val();
    var days=input/60/24;
    var daysR=(Math.round(days))%365;
    var years=Math.floor(days/365);
    $("#output1").text(years+" years, "+daysR+" days");
};
var gratotal=function(){
    var input1=$("#num2").val();
    var input2=$("#num3").val();
    var grat=input1*(input2/100);
    input1=parseInt(input1);
    grat=parseInt(grat);
    var total=input1+grat;
    $("#output2").text("Gratuity: $"+grat+", Total: $"+total);
};
var bmi=function(){
    var input1=$("#num4").val();
    var input2=$("#num5").val();
    var kilo=input1*0.45359237;
    var mtrs=input2*0.0254;
    var bmi=kilo/(mtrs^2);
    $("#output3").text("BMI is "+bmi);
};
var hToHM=function(){
    var input=$("#num6").val();
    var mins=input*60;
    var minsR=Math.round(mins%60);
    var hrs=(mins-minsR)/60;
    $("#output4").text(hrs+" hours, and "+minsR+" minutes");
};