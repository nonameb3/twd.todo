const start={jQuery:function(){runjQuery()}};

// start.jQuery = function(){
//     runjQuery()
// }

start.jQuery();

function runjQuery(){
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
            $("ul").append("<li><span><a href='#'><i class='fas fa-trash-alt'></i></a></span>" + text + "</li>");
        } 
    });

    $(".fa-plus").click(function(){
        $("input").fadeToggle( "fast")
    });

}