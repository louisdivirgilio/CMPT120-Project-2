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

		item_flashlight = new proto_item(0, "Flashlight", "Your run of the mill, everyday flashlight.");
		item_lock_box   = new proto_item(1, "Lock Box", "Lock box that may contain a mysterious item.");
		item_batteries 	= new proto_item(2, "Batteries", "These batteries fit into the flashlight so you can see.");
		item_key 	    = new proto_item(3, "Key", "This is golden key that could open anything...");


		switch (currentlocation) {
			case 0: 
					inventoryArray[0] = item_flashlight
					updatetext ("Your inventory now contains the Flashlight.")
					
					break;
			case 9:
					inventoryArray[3] = item_key
					updatetext ("Your inventory now contains the Key.")
					
					break;
			case 8:
					inventoryArray[2] = item_batteries
					updatetext ("Your inventory now contains Batteries.")
					
					break;
			case 7:
					inventoryArray[1] = item_lock_box
					updatetext ("Your inventory now contains the Lock Box.")
					
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

  		location0 = new proto_location("0", "Kitchen Counter", "You are in front of the flashlight, it is dark so it's probably a good idea to pick it up.(pick up by typing 'Take')", "Flashlight");
  		location1 = new proto_location("1", "Kitchen", "You venture North and you come to the old home's dingy kitchen. You notice accros the room, a flashlight on the kitchen counter and you walk over...", "");
  		location2 = new proto_location("2", "Porch door", "The front door leads to the porch. The porch door, you come to find, is locked.", "");
  		location3 = new proto_location("3", "Porch", "To the West is the house's front door. It is open! And you procede through...", "");
  		location4 = new proto_location("4", "Starting Room", "You wake up, dazed and confused, in the entry way of a very old house. You take a moment to get your barings and make a decision about where you are. Type 'Help' to figure out what you're doing...", "");
  		location5 = new proto_location("5", "Hallway", "You begin to walk down the hallway and you see a door slightly ajar. Maybe you should continue to it.", "");
  		location6 = new proto_location("6", "Bathroom", "You go throught the door and find the room to be an old bathroom. You see the tank of the toilet is open.", "");
  		location7 = new proto_location("7", "Tank", "You look into the tank and find a small lock box floating in the water. It looks important so you should probably pick it up.", "Lock Box");
  		location8 = new proto_location("8", "Stairs", "To the South you see stairs that lead down to the basement. You begin to go down the stairs to the basement door. At the bottom of the stairs you see a pack of batteries that will fit in the flashlight.", "Batteries");
  		location9 = new proto_location("9", "Basement", "You find yourself in the basement of the old home and you find a golden key.", "Key");

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
		var textadd = document.getElementById("taGame");
		textadd.value = textadd.value + "\n" + directionmsg;
		textadd.scrollTop = textadd.scrollHeight;
		}
		
	function btn_enter_click() {
		var userinput = document.getElementById("txtcommand");

	function help_user(){
 		updatetext("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\".  Anything else will not work.");
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
