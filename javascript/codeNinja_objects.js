// This file is used for creating all of my objects. Visual elements will be controlled by codeNinja.html and codeNinja.css. 
// All of the objects will be built out in CodeNinja_objects.js. jQuery calls will be built out in codeNinja_jQuery.js. 
// All other JavaScript functions will be built out in codeNinja_action.js
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
		name: "Young CodeNinja",
		health: [5,5],
		attackPower: 2,
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

