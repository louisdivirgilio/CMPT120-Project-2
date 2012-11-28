//determines what loaction you are at.
	var currentlocation = 8  
	
	//room toggle scores 
	var room0score = 0;
	var room1score = 0;
	var room2score = 0;
	var room3score = 0;
	var room4score = 0;
	var room5score = 0;
	var room6score = 0;
	var room7score = 0;
	var room8score = 0;
	var room9score = 0;			

	//Global Array for moving		   N    E   S    W
	var nav = new Array(           /*  0    1   2    3  */  //0 is north, 1 is east, 2 is south, 3 is west,
	                     /* 0 */     [-1,  -1,  1,  -1],
	                     /* 1 */     [ 0,  -1,  4,  -1],
	                     /* 2 */     [-1,   3, -1,  -1],
	                     /* 3 */     [-1,   4, -1,   2],
	                     /* 4 */     [ 1,   5,  8,   3],
	                     /* 5 */     [-1,   6, -1,   4],
	                     /* 6 */     [-1,   7, -1,   5],
	                     /* 7 */     [-1,  -1, -1,   6],
	                     /* 8 */     [ 4,  -1,  9,  -1],
	                     /* 9 */     [ 8,  -1, -1,  -1]
	                    
	                    ); //array within the array makes the grid

	var locationArray = new Array();

	var inventoryArray = new Array();


	//the total score from the toggles
	var score = 0;

	//tally up the moving amounts
	var movecount = 0

	//the basis for all items
	function proto_item(_id, _name, _description) {
   		
   		this.id      		= _id;
   		this.name     		= _name;
   		this.description   	= _description;
   		
	   this.toString = function() {
	      var retVal = "";
	      retVal = "[Item]"                 	        + "\n" + 
	               "Id:" + this.id           		    + "\n" +
	               "Name:" + this.name       		    + "\n" +
	               "Description:" + this.description    + "\n";
	      return retVal;
	   }   
	}



	// how the take command works
	function take_item() {

		item_ladle 		= new proto_item(0, "Ladle", "This is a very dull wooden ladle its mostly for soup and acid, but mostly soup.");
		item_silver_key = new proto_item(1, "Silver Key", "This is a key, and it happens to be silver, who would have thought.");
		item_lockbox 	= new proto_item(2, "Lockbox", "This is a box shaped container, it is also locked.  You need a key to open it.");
		item_keycard 	= new proto_item(3, "Keycard", "This is a card that can open doors, much like a real key, but however it is in the shape of a card.");


		switch (currentlocation) {
			case 0: 
					inventoryArray[0] = item_ladle
					updatetext ("Your inventory now contains the Ladle.")
					
					break;
			case 9:
					inventoryArray[3] = item_card
					updatetext ("Your inventory now contains the card.")
					
					break;
			case 8:
					inventoryArray[2] = item_lockbox
					updatetext ("Your inventory now contains the lockbox.")
					
					break;
			case 7:
					inventoryArray[1] = item_silver_key
					updatetext ("Your inventory now contains the Silver Key.")
					
					break;
			}
		}

	function inventory_check() {

		updatetext(inventoryArray);

		}


	//location prototype
	function proto_location(_id, _name, _description, _item) {
   		this.id      		= _id;
   		this.name     		= _name;
   		this.description   	= _description;
   		this.item       	= _item;
   		
	   this.toString = function() {
	      var retVal = "";
	      retVal = "[Room]"                 	        + "\n" + 
	               "Id:" + this.id           		    + "\n" +
	               "Name:" + this.name       		    + "\n" +
	               "Description:" + this.description    + "\n" +
	               "Item:" + this.item       			+ "\n";
	      return retVal;
	   }   
	}
         
	function creating_locations() {
  		// create instances under proto_location 

  		location0 = new proto_location("0", "Sauna", "You find yourself in what looks like to be a sauna there is not much in here except a pile of coals and a wooden ladle in a bucket", "Wooden Ladle");
  		location1 = new proto_location("1", "Bathroom", "There is a strong light when you open the door.  Your eyes slowly adjust to the light.  There is a single sink, toilet and a modern looking white cabinet.  There also is a door to the North that is ajar.  You have the urge to wash your hands, but you are way to busy with more pressing concerns.", "");
  		location2 = new proto_location("2", "Facility Entrance", "You walk into a room with tinted glass walls on all sides.  There are empty shelves on the floor and a metal door across the room that is locked.", "");
  		location3 = new proto_location("3", "Hall", "You open the Western door, and it leads you into a single beige hallway with a door to the west.  You feel like you could die from the blandness of this hallway and want to leave quickly", "");
  		location4 = new proto_location("4", "Starting Room", "You awake in a dim lit room with a single panel on the wall with a small sticker on it. One door leading In each direction.  Lastly a logo on the wall that reads Aperture Science.  The Northern door is labeled Bathroom.  The Eastern door is labeled Storage.  The Southern door is labeled Bedroom.  The Western door is Labeled Testing Facility.", "");
  		location5 = new proto_location("5", "Storage", "The door to the storage room opens with a loud creak.  You should find some WD40 for that...  The room contains a small stack of boxes, a breaker box, and a mirror with some harsh stains.  There looks to be another door to the East beyond the boxes.", "");
  		location6 = new proto_location("6", "Mess Hall", "You open the door to see what looks like to be a mess hall.  There are a few tables in the center of the room.  To the north there is a door that is barred shut.  To the East there is what looks like to be the kitchen.", "");
  		location7 = new proto_location("7", "Kitchen", "You walk into the kitchen, it looks like the entire place was ransacked.  Nothing was left except one of the stoves has a pot boiling that contains a green tinted liquid.  It looks extremely hot, but you notice a small glint at the bottom of the pot.  It is clearly to hot to put your hand in.  You reach for the knobs on the stove, but they were all torn off.", "Silver Key");
  		location8 = new proto_location("8", "Bedroom", "The door to the bedroom was already open.  Upon entering you see a weird looking bed, a metal lock box, and a chest of drawers.  There is a closet in the south end of the room  After looking around you feel like taking a nap, but you don't due to the lack of a pillow, warm milk, and blankets.", "Lockbox");
  		location9 = new proto_location("9", "closet", "As you enter the closet there is a small stack of coffee mugs and what looks like a portable radio and a single shelf with a card on it.", "Card");

  		locationArray[0] = location0;
  		locationArray[1] = location1;
  		locationArray[2] = location2;
  		locationArray[3] = location3;
  		locationArray[4] = location4;
  		locationArray[5] = location5;
  		locationArray[6] = location6;
  		locationArray[7] = location7;
  		locationArray[8] = location8;
  		locationArray[9] = location9;

}

//updatetext(room3.description)



	function btn_move_click(direction) {
		movecount = movecount + 1
		direction = direction
		var newlocation = nav[currentlocation][direction];
		if (newlocation !== -1) {
			currentlocation = newlocation;
			VisablityScore(newlocation)
			creating_locations();
			updatetext(locationArray[currentlocation]);
		} else { updatetext("you can't go this way.")}

	}



	function VisablityScore(newlocation) {
		var newlocation = newlocation
		switch (newlocation) {
				case 0: if (room0score === 0) {
							room0score++;
							score = (score + 5)
							}
		
						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="visible";
				break;
				case 1: if (room1score === 0) {
							room1score++;
							score = (score + 5)
							}
		
						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 2: if (room2score === 0) {
							room2score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 3: if (room3score === 0) {
							room3score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 4: if (room4score === 0) {
							room4score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 5: if (room5score === 0) {
							room5score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 6: if (room6score === 0) {
							room6score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 7: if (room7score === 0) {
							room7score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 8: if (room8score === 0) {
							room8score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 9: if (room9score === 0) {
							room9score++;
							score = (score + 5)
							}
						
						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;		
		}
	}
		
	function btn_score_click() {
		alert("You have " + score + " points.");
			}											

	function updatetext(directionmsg) {
		directionmsg = directionmsg + "[ " + currentlocation + " ]"
		var textadd = document.getElementById("textarea1");
		textadd.value = textadd.value + "\n" + directionmsg;
		textadd.scrollTop = textadd.scrollHeight;
		}
		
	function btn_enter_click() {
		var userinput = document.getElementById("txtcommand");

	function help_user(){
 		updatetext("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\".  Anything else will not work.  You should find something to get to the bottom of the pot.");
  		}
		
		switch (userinput.value) {
			//direction inputs
			case "N":
	        	btn_move_click(0);          
	        break;     
	        case "n":
	        	btn_move_click(0);          
	        break;     
	        case "E":
	        	btn_move_click(1);          
	        break;  
	        case "e":
	       		btn_move_click(1);          
			break;  
			case "S":
				btn_move_click(2);          
			break;  
			case "s":
				btn_move_click(2);          
			break;  
			case "W":
				btn_move_click(3);          
			break;  
			case "w":
				btn_move_click(3);          
			break;  

			//take commant
			case "Take":
				take_item();
			break;
			case "take":
				take_item();
			break;

			//help command
			case "Help":
				help_user();
			break;
			case "help":
				help_user();
			break;

			//inventory checker
			case "Inventory":
				inventory_check();
			break;
			case "inventory":
				inventory_check();
			break;

			default:
         	   updatetext ("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\". ");                   
      		}
      	}			
