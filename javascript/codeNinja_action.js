// This file is used for creating all of the Functions to be called. Visual elements will be controlled by codeNinja.html and codeNinja.css. 
// All of the objects will be built out in CodeNinja_objects.js. jQuery calls will be built out in codeNinja_jQuery.js. 
// All other JavaScript functions will be built out in codeNinja_action.js
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//build out ItemShop 
function ItemShop() {
	function buildString () {
		var string = ("The following items are for sale: \n\n");  //build out string which will display all items in the store

		for (j=0; j<potion.length; j++) {
			string += potion[j].name + "\n"                   
				+ "    There are " + potion[j].quantity + " available \n" 
				+ "    " + potion[j].cost + " gold pieces each \n"
				+ "    This potion will " + potion[j].description + "\n\n";
		};
		return string;
	};
	
	function purchaseChoice() {
	
		var purchaseChoice = prompt(buildString() + "\n\n Would you like to purchase anything? y or n");
		//purchaseChoice = purchaseChoice.toLowerCase();
	
		while (["y", "n"].indexOf(purchaseChoice) < 0) {  //make sure they made a valid y or n choice
			window.alert("Oops, you made a wrong choice. Please carefully review your choices and choose what you'd like to do.");
			purchaseChoice = prompt(buildString() + "\n\n Would you like to purchase anything? y or n").toLowerCase();
		};	
	
		switch(purchaseChoice) {  //route based on their choice
			case 'y': window.alert("build out purchase function"); break;
			case 'n': window.alert("move on"); break;
		}; //close out Switch
	}; //close out purchaseChoice
	purchaseChoice();
	
	function makePurchase () {
		var string = ("What would you like to purchase? \n\n");  //build out string which will display all items in the store

		for (j=0; j<potion.length; j++) {
			string += ([j] + 1) + ")" + potion[j].name + "\n"                   
				+ "    Quantity in stock: " + potion[j].quantity + "\n" 
				+ "    Price: " + potion[j].cost + " gold pieces \n"
				+ "    Description: " + potion[j].description + "\n\n";
		};
		return string;
	}; //close out makePurchase
}; //close out ItemShop

b=0;  //global variable for deciding which bad guy to pull - needs to be in better spot, just making this work for now
// fight scene for each bad guy you encounter
var whoHitWho = function () {
	if (codeNinja.health[0] > 0 && badGuy[b].health > 0) {   //change badGuy[0] back to variable b once you define it
		var codeNinjaPower = Math.floor((Math.random() * codeNinja.attackPower) + 1);
		var badGuyPower = Math.floor((Math.random() * badGuy[b].attackPower) + 1);
		var lifeLost = 0;
		
		if (codeNinjaPower > badGuyPower) {
			lifeLost = parseInt(codeNinjaPower - badGuyPower);
			badGuy[b].health -= lifeLost;
			window.alert("Congrats you landed a hit! " + badGuy[b].name 
						+ " lost " + lifeLost + " point(s) of his life.");
		} 
		else if (codeNinjaPower == badGuyPower) {
			window.alert("You both lunged and clashed swords. No damage done.");
		} 
		else {
			lifeLost = parseInt(badGuyPower - codeNinjaPower);
			codeNinja.health[0] -= lifeLost;
			window.alert("Ouch, " + badGuy[b].name + " landed a hit." 
						+ " You lost " + lifeLost + " point(s) of your health.");
		}; 
	};
};

var didAnybodyWin = function () {
	if (codeNinja.health[0] <= 0) {
			window.alert("You lost the battle. Our hero is dead."); 
			window.alert("Thank you for playing! To play again, hit refresh on your browser window.");
	}
	else if (badGuy[b].health <= 0) {
		window.alert("You win");
	}
	else { 
		window.alert("What would you like to do next?");
	}
};

var update_status = function () {
	my_health.innerHTML = (codeNinja.health);
	my_weapon.innerHTML = (codeNinja.weapon.name);
	my_defense.innerHTML = (codeNinja.defense.name);
	my_gold.innerHTML = (codeNinja.gold);
	my_items.innerHTML = (codeNinja.items.name);
};

var change_div = function () {
	$(".container").css("display","none");
  	$("#header").css("display","block");
};



