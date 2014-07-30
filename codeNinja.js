// create all classes & objects needed for my game; our hero, enemies, weapon choices, defense choices, items, etc.

//create Item superconstructor; used for other constructors to inherit from
function Item (name,effect) {
	this.name = name;
	this.effect = effect;
	this.action = function() {
		return ("The value being returned is: " + Math.floor((Math.random() * this.effect) + 1));
	}
};

	//create weapons constructor
	function Weapon(name,effect){
		this.name = name;
		this.effect = effect;
	};
	Weapon.prototype = new Item();

	//create available weapons objects	
	var weapon = new Array ();
	weapon[0] = new Weapon("Fists", 2);
	weapon[1] = new Weapon("Small Sword", 5);
	weapon[2] = new Weapon("Large Sword", 10);

	//create defense constructor 
	function Defense(name,effect){
		this.name = name;
		this.effect = effect;
	};
	Defense.prototype = new Item();

	//create available defense objects
	var defense = new Array ();
	defense[0] = new Defense("None", 0);
	defense[1] = new Defense("Small Shield", 1);
	defense[2] = new Defense("Large Shield", 3);

	// potion object constructor
	function Potion(name,effect,quantity,cost,description) {
  		this.name = name;
  		this.effect = effect;
  		this.quantity = quantity;
  		this.cost = cost;
  		this.description = description;
	};
	Potion.prototype = new Item();

	//object array of potions to be used when displaying all objects in the ItemShop
	var potion = new Array ();
	potion[0] = new Potion ("Small Healing Potion", 1, 4, 50, "Add 1 to your health");
	potion[1] = new Potion ("Large Healing Potion", 3, 2, 75, "Add 3 to your health");
	potion[2] = new Potion ("Sleeping potion", 1, 2, 700, "Puts enemy to sleep");


//create Character superconstructor; used for other constructors to inherit from
function Character(name) {
	this.name = name;
};

	//create our hero & set initial properties
	var codeNinja = {
		name: " Young CodeNinja",
		health: [5,5],
		weapon: weapon[0],
		defense: defense[0],  
		items: [potion[0],],
		gold: 200
	};
	codeNinja.prototype = new Character();

	// create all badGuy objects to be called throughout the game
	// reward is an array in the format of [gold, hearts, beer] health & beer can have a postive or negative consequence
	function BadGuy(name,health,attackPower,reward,willAcceptBribe) {
    	this.name = name;
    	this.health = health;
  		this.attackPower = attackPower;
  		this.reward = reward;
  		this.willAcceptBribe = willAcceptBribe;
	};
	BadGuy.prototype = new Character();

	var badGuy = new Array ();
	badGuy[0] = new BadGuy ("Bad Guy 1", 3, 3, [200, .5, 1], 15);
	badGuy[1] = new BadGuy ("Bad Guy 2", 4, 2.5, [250,1,-1], 30);
	badGuy[2] =  new BadGuy ("Bad Guy 3", 2, 5, [500,1.5,-2], 25);
	badGuy[3] = new BadGuy ("Bad Guy 4", 6, 7, [1000,2,1], 100);
	badGuy[4] = new BadGuy ("Main Boss", 10, 9, [5000, 4, 2], 1000000);

//object constructor to create all of the scenarios within the game
function Scenario (name,storyLine,action) {    //action will be the function called such as fightOrFlee() or battleChoice()
	this.name = name;
	this.storyLine = storyLine;
	this.action = function() {
		
	};
};

	var scenario = new Array ();
	scenario[0] = new Scenario ("Scenario 1", "This scenario goes like this. You will face..." + badGuy[0].name);
	scenario[1] = new Scenario ("Scenario 2", "This scenario goes like this. Itemshop");
	scenario[2] = new Scenario ("Scenario 3", "This scenario goes like this. You will face..." + badGuy[1].name);
	scenario[3] = new Scenario ("Scenario 4", "This scenario goes like this. You will face..." + badGuy[2].name);
	scenario[4] = new Scenario ("Scenario 5", "This scenario goes like this. You will face..." + badGuy[3].name);
	scenario[5] = new Scenario ("Scenario 6", "This scenario goes like this. You will face..." + badGuy[4].name);

// ALL FUNCTIONS THAT ARE PART OF THE ACTION FOR THE GAME

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
	didAnybodyWin();
};

var didAnybodyWin = function () {
	if (codeNinja.health[0] <= 0) {
			window.alert("You lost the battle. Our hero is dead."); 
			window.alert("Thank you for playing! To play again, hit refresh on your browser window.");
		i = scenario.length + 1;
	}
	else if (badGuy[b].health <= 0) {
		window.alert("You win");
	}
	/*else {
		inBattleOptions();
	};*/
};