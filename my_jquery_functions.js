$(document).ready(function(){
	// hides all DIVs with the CLASS container
	// and displays the one with the ID 'home' only
	$(".container").css("display","none");
	$("#header").css("display", "none");
	$("#home").css("display","block");
	
	// makes the navigation work after all containers have been hidden 
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
			case 101:	window.close(); //this is not working yet
						break;
		}
	});
});

// when you click the start game button, takes you to the intro <div>
$(document).ready(function (){
  $("#start").click(function() {
  		$(".container").css("display","none");
		$("#intro").slideDown("slow");
		$("#header").css("display","block");
	});
});

//take character name from input box and input into all "character" class div's 
$(document).ready(function () {
	$("#submit_character_name").click(function () {
	var input = $('input[name=character_name]').val();  // get value from input field 
	var x = document.getElementsByClassName("character"); //create array of class objects with character name
    var y = x.length;
   	// iterate through each instance of class "character" and set value equal to the name provided in the input field
   	for (i=0; i<y; i++) {
    		x[i].innerHTML = (input);
    };
 });
});

// when you click the next_1 button, takes you from intro <div> to opener <div>
$(document).ready(function (){
  $("#next_1").click(function() {
  		$(".container").css("display","none");
		$("#opener").slideDown("slow");	
	});
});

// when you click the #restart button, takes you to the #home <div>
$(document).ready(function (){
	$("#restart").click(function() {
  		$(".container").css("display","none");
		$("#home").slideDown("slow");	
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
			$(".container").css("display","none");
			
			var target = $(this).attr("href");
				if (target === '#status') {
					alert($('#my_name').innerHTML = (codeNinja.name));
					$('#my_health').innerHTML = (codeNinja.health);
					$('#my_weapon').innerHTML = (codeNinja.weapon.name);
					$('#my_defense').innerHTML = (codeNinja.defense.name);
					$('#my_gold').innerHTML = (codeNinja.gold);
					$('#my_items').innerHTML = (codeNinja.items.name);
				}
			$(target).slideDown("slow");	
		});
	});
}

