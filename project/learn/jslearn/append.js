// append:
// prepend:
// before:
// after:

$(document).ready(function(){
    $("#btn1").click(function(){
        // $("#p1").append("this is ...");
        $("#p1").prepend("this is ...");
    });
    // 区别在于换不换行
    $("#btn2").click(function(){
        // $("#p2").before("this is ...");
        $("#p2").after("this is ...");
    });
});

function appendText() {
    /*
        html jQuery DOM
    */
   var text1 = "<p>marscarm</p>" 
   var text2 = $("<p></p>").text("hhh");
   var text3 = document.createElement("p");
   text3.innerHTML="sss";
   $("body").append(text1,text2,text3);

}
