var score = 0;
var Northscore = 1;
var Eastscore = 1;
var Southscore = 1;
var Westscore = 1;          
var currentlocation = "start";
var backpack = false;

function btn_North_click () { 
          
         switch (currentlocation) {
              case "start":currentlocation = "NORTH1";
                    North1();
                    UpdateText (msg);
                    break;
              
              case "NORTH1":currentlocation = "NORTH2";
                    North2();
                    UpdateText (msg);
                    break;
           
              case "NORTH2": currentlocation = "NORTH3";
                     North3();
                     UpdateText (msg);
                     break;
                     
              case "SOUTH1": currentlocation = "start";
                    Start();                   
                    break;
                    
              case "SOUTH2": currentlocation = "SOUTH1";
                     South1();
                     UpdateText (msg);
                     break; 
                     
                    }                     
                    }
                    

 
 function btn_East_click () {
          
          switch (currentlocation){
              case "start": currentlocation = "EAST1";  
                    East1();                    
                    UpdateText (msg);  
                    break;           
              
              case "EAST1": currentlocation = "EAST2"; 
                    East2();
                    UpdateText (msg);
                    break;
              
              case "WEST1": currentlocation = "start";
                    Start();                    
                    break;
             
              case "WEST2": currentlocation = "WEST1";
                    West1 (); 
                    UpdateText (msg);
                    break;
             
              }
              }
             
         

function btn_South_click () {
          
          switch (currentlocation) {
              case "start": currentlocation = "SOUTH1";  
                    South1 ();
                    UpdateText (msg);
                    break;
              
              case "SOUTH1": currentlocation = "SOUTH2";
                    South2 ();
                    UpdateText (msg);
                    break;
              
              case "NORTH3":currentlocation = "NORTH2";
                    North2 ();
                    UpdateText (msg);
                    break;
              
              case "NORTH2": currentlocation = "NORTH1";
                    North1 ();
                    UpdateText (msg);
                    break;
                    
            
              case "NORTH1": currentlocation = "start";
                    Start();                   
                    break;
              
              }
              }
                    
                  
function btn_West_click () {
          
          switch (currentlocation) {
               case "start": currentlocation = "WEST1"; 
                     West1 ();
                     UpdateText (msg);
                     break;
               
              case "WEST1": currentlocation = "WEST2";
                      West2 ();
                      UpdateText (msg);
                      break;
              
               case "EAST1": currentlocation = "start";
                      Start ();                     
                      break;             
               
               case "EAST2": currentlocation = "EAST1";
                      East1 ();
                      UpdateText (msg);
                      break;

               }
               }
function Take (){
          
          switch (currentlocation) {
                case "NORTH2":  
                    if (backpack === false) {
                    backpack = true;
                    UpdateText ("You have a working flashlight in your inventory.")     
                    } else {
              }
                 break;
              }
              }     
               
               


function Start (){
         msg = "You wake up, dazed and confused, in the entry way of a very old house. You take a moment to get your barings and make a decision about where you are. Type 'Help' to figure out what you're doing...";
         UpdateText (msg);
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="visible";
           }           
           
function North1 (){
         msg = "You venture North and you come to the old home's dingy kitchen. You notice accros the room, a flashlight on the kitchen counter and you walk over...";
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
           if ( Northscore === 1 ){
            score = (score + 5)
            Northscore= Northscore + 1;     
           }
           }
    
 
function North2 (){
         msg = "You are in front of the flashlight, it is dark so it's probably a good idea to pick it up. (pick up by typing 'Take')";
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
            if ( Northscore === 2 ){
            score = (score + 5)
            Northscore= Northscore + 1;     
           }
           }

 function North3 (){
          msg = "You continue North to the kitchen door. Hopefully, you try and try to open it but it's no use. You can't go further North."
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
            if ( Northscore === 3 ){
            score = (score + 5)
            Northscore= Northscore + 1;     
           }
           }
 
 
 function East1 (){
         msg= "You venture to the East and you come to find the old, nasty bathroom. You search and search and see a window. Maybe you can open it...";
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility= "hidden";  
            if ( Eastscore === 1 ){
             score = (score + 5)
             Eastscore= Eastscore + 1; 
             }
             }                   

function East2 (){ 
          msg= "You walk over to the window and try and open it. However, it is locked. You can't go further East.";
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility= "hidden";  
            if ( Eastscore === 2 ){
             score = (score + 5)
             Eastscore= Eastscore + 1; 
             }
             }                   


function South1 (){
          msg= "To the South you see stairs that lead down to the basement. You begin to go down the stairs to the basement door.";
          document.getElementById("idEast").style.visibility="hidden";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility="visible";                    
          document.getElementById("idNorth").style.visibility="visible"; 
            if ( Southscore === 1 ){
             score = (score + 5)
             Southscore= Southscore + 1;
             }
             }

function South2 (){
          msg= "The basement door is locked much to your chagrin. You can no longer move South.";
            document.getElementById("idEast").style.visibility="hidden";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility="hidden";                    
          document.getElementById("idNorth").style.visibility="visible"; 
            if ( Southscore === 2 ){
             score = (score + 5)
             Southscore= Southscore + 1;
             }
             }



function West1 (){
          msg = "To the West is the house's front door. It is open! And you procede through...";
          document.getElementById("idNorth").style.visibility="hidden";
          document.getElementById("idEast").style.visibility="visible";
          document.getElementById("idWest").style.visibility="visible";
          document.getElementById("idSouth").style.visibility= "hidden";
            if ( Westscore === 1 ){
             score = (score + 5)
             Westscore= Westscore + 1;
          }
          }

function West2 (){ 
          msg= "The front door leads to the porch. The porch door, you come to find, is locked. You can't go further West.";
          document.getElementById("idNorth").style.visibility="hidden";
          document.getElementById("idEast").style.visibility="visible";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility= "hidden";
            if ( Westscore === 2 ){
             score = (score + 5)
             Westscore= Westscore + 1;
          }
          }

function btn_Score_click () {                    
          UpdateText ("Your score is; " + score);
          } 

function btn_go_click(){
      var userinput = document.getElementById("txtcommand"); 
      switch (userinput.value){
          
          case "N":
          btn_North_click();          
          break;     
    
          case "n":
          btn_North_click();          
          break;     
    
          case "E":
          btn_East_click();          
          break;  
    
          case "e":
          btn_East_click();          
          break;  
             
          case "S":
          btn_South_click();          
          break;  

          case "s":
          btn_South_click();          
          break;  
    
    
          case "W":
          btn_West_click();          
          break;  
         
          case "w":
          btn_West_click();          
          break;  
          
          case "Take":
          Take();
          break;
          
          case "Help":
          Help();
          break;
          
          case "Inventory":
          Inventory();
          break;
          
          case Valid_commands (userinput.value):
          break;
          
          }
          }

function Inventory(){
          if (backpack === true){
          UpdateText("You have a working flashlight in your inventory.");
          }else{ 
          UpdateText ("Nothing is in your inventory.");
          }
          }
          
function Help(){
          UpdateText("The valid commands for 'Totally Original Text Adventure Game' are N to go North, E to go East, S to go South, and W to go West. Type 'Take' pick up useful items around the game. Type 'Inventory' to see stuff you have obtained throughout. Do yourself a favor and dont type anything other than this stuff. Move along.");
          }
                   
function Valid_commands(){
          UpdateText ("Type 'Help' to figure out what you're doing. You know, maybe if you want to win the game or something..."); 
          }
   

function UpdateText (msg) { 
    msg = msg + "[" + currentlocation +" ]" ;
    var ta= document.getElementById ("taGame");
    ta.value= msg + "\n" + ta.value;
    }