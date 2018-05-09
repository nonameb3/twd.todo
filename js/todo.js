if (jQuery) {
    console.log("jQuery Connect!!");
}

$("ul").on("click", "li", function() {
    $(this).toggleClass("line-thorough")
});

$("ul").on("click", "span", function(span) {
    $(this).parent().fadeOut('500', function() {
        $(this).remove();
    });
    span.stopPropagation();
});

$("input").keypress(function(event) {
    if (event.which == 13) {
        var text = this.value;
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + text + "</li>");
    } 
});

$(".fa-plus").click(function(){
    $("input").fadeToggle( "fast")
});