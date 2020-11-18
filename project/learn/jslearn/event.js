var clickBtn;

$(document).ready(function(){
    clickBtn = $("#click");
    clickBtn.click(function(){
        var e = jQuery.Event("MyEvent");
        clickBtn.trigger(e);
    });

    clickBtn.bind("MyEvent", function(){
        console.log(event);
    });
});