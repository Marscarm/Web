$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").text("hhhhh");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href='https://www.baidu.com'>marscarm</a>");
    });
    $("#btn3").click(function(){
        $("#i3").val("jike");
    });

    $("#btn4").click(function(){
        $("#aid").attr({
            "href":"https://www.taobao.com",
    });
    });

    $("#btn5").click(function(){
        $("#p5").text(function(i,ot){
            return "old:"+ot+" new:"+(i);
        });
    });

});