// This file is used for my jQuery calls during the game. Visual elements will be controlled by codeNinja.html and codeNinja.css. 
// All of the objects will be built out in CodeNinja_objects.js. jQuery calls will be built out in codeNinja_jQuery.js. 
// All other JavaScript functions will be built out in codeNinja_action.js
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	// hides all DIVs with the CLASS container
	// and displays the one with the ID 'home' only
	change_div();
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
			case 115:	update_status();
						showViaKeypress("#status");
						break;
						
			// user presses the "e" key
			case 101:	showViaKeypress("#exit"); 
						break;
		}
	});
});

// when you click the start game button, takes you to the intro <div>
$(document).ready(function (){
  $("#start").click(function() {
  		$(".container").css("display","none");
		$("#intro").slideDown("slow");
	});
});

// when you click the next_intro button, takes you from intro <div> to createName <div>
$(document).ready(function (){
  $("#next_intro").click(function() {
  		$(".container").css("display","none");
		$("#createName").slideDown("slow");	
	});
});

//take character name from input box and input into all "character" class div's 
$(document).ready(function () {
	$("#submit_character_name").click(function () {
	// first advance the screen to your "opener" <div>
	$(".container").css("display","none");
	$("#opener").slideDown("slow");		
	// then take value submitted by user and insert into the appropriate fields
	var input = $('input[name=character_name]').val();  // get value from input field 
	var x = document.getElementsByClassName("character"); //create array of class objects with character name
    var y = x.length;
   	// iterate through each instance of class "character" and set value equal to the name provided in the input field
   	for (i=0; i<y; i++) {
    		x[i].innerHTML = (input);
    };
 });
});

// when you click the next_opener button, takes you from opener <div> to scenario 1 <div>
$(document).ready(function (){
  $("#next_opener").click(function() {
  		change_div();
		$("#scenario_1").slideDown("slow");	
		$("#resume_game").css("display", "none");
		scenario_1_story.innerHTML = scenario[0].storyLine;
		$(".attack, .item_list, .flee_battle").css("display","none");
	});
}); 

// when you click the .fight button, displays "action" buttons
$(document).ready(function (){
	$(".fight").click(function() {
		$(".fight, .avoid").css("display", "none");
  		$(".attack, .item_list, .flee_battle").css("display","inline");
	});
});   

//When on battle screen, if you click attack button, initiates the whoHitWho function
$(document).ready(function () {
	$('.attack').click(function () {
		whoHitWho();
		didAnybodyWin();
	});
});

// when you click the #restart button, takes you to the #home <div>
$(document).ready(function () {
	$("#restart").click(function() {
  		$(".container").css("display","none");
		$("#home").slideDown("slow");	
	});
});  

// when character status screen loads, shows the proper attributes
$(document).ready(function () {
	$("#character_status").click(function () {
		update_status();
	});
});

function showViaKeypress(element_id) {
	$(".container").css("display","none");
	$(element_id).slideDown("slow");
};

function showViaLink(array)
{
	array.each(function(i)
	{	
		$(this).click(function()
		{
			$(".container").css("display","none");
			
			var target = $(this).attr("href");
				if (target === '#status') {
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

