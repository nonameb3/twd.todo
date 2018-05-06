if (jQuery){
	console.log("jQuery Connect!!");
}

$("li").click(function(){
	$(this).toggleClass("line-thorough")
});

$("span").click(function(span){
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
	span.stopPropagation();
});