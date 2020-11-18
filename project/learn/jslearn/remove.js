//remove empty
$(document).ready(function(){
    $("#btn1").click(function(){
        // $("#div").remove();//删除整个元素
        $("#div").empty();//删除子元素 如果元素没有设定固定宽高的话，没有内容之后就会消失

    });
});