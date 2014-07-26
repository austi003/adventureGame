$(document).ready(function(){
	// hides all DIVs with the CLASS container
	// and displays the one with the ID 'home' only
	$(".container").css("display","none");
	$("#header").css("display", "none");
	$("#home").css("display","block");
	
	// makes the navigation work after all containers have bee hidden 
	showViaLink($("ul#navigation li a"));
	
	// listens for any navigation keypress activity
	$(document).keypress(function(e){
		switch(e.which)
		{
			// user presses the "r"
			case 114:	showViaKeypress("#gameWindow");
						break;	
						
			// user presses the "s" key
			case 115:	showViaKeypress("#status");
						break;
						
			// user presses the "e" key
			case 101:	window.close();
						break;
		}
	});
});

$(document).ready(function (){
  $("#start").click(function() {
  		_begin();
  });
});

$(document).ready(function () {
	$("#exit").click(function() {
		window.close();
	});
});

function showViaKeypress(element_id)
{
	$(".container").css("display","none");
	$(element_id).slideDown("slow");
}

function showViaLink(array)
{
	array.each(function(i)
	{	
		$(this).click(function()
		{
			var target = $(this).attr("href");
			$(".container").css("display","none");
			$(target).slideDown("slow");
		});
	});
}