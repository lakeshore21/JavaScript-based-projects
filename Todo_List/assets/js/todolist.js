// add and remove checked mark
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// read new todo from input
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todo = $(this).val();
		$("ul").append("<li><span><i class='far fa-minus-square'></i></span> " + todo + "</li>");
	}
});

// show and hide input box
$(".fa-plus-circle").click(function() {
	$("input[type='text']").fadeToggle();
});