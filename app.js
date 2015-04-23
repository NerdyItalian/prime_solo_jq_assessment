var i = 0;

$(document).ready(function(){
	$("#generateButton").click(function(){
		i++;
		$('p').append("<div>Line #" + i + "  <button id='changeColor'>Change Color</button><button id='btnRemove'> Remove </button></div>");
	});
	
	$('p').on("click", "#btnRemove", function(){
		$(this).parent().remove();
	});
	
	$('p').on("click", "#changeColor", function(){
	$(this).parent().css("background-color", "purple");
	});

});