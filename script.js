// VARABILES
  // Gets value of dollar amount
  var amount = document.querySelector('#amount');
 // targets the dom to place the idea
  var displayA = document.querySelector('#idea');
  // targets the dom to place the link
  var displayB = document.querySelector('#mapBtn');
  // targets the dom to place the map
  var displayC = document.querySelector('iframe');
 
// IDEA BTN RUNS AMOUNT FUNCTION
  $('#btn').click(function idea() {

        // THIS HIDES THE MAP NEXT TIME YOU CLICK IDEA BTN
    document.getElementById("location").style.visibility = "hidden";

           //DIFFRENT AMOUNTS
    if (amount.value == 0){ 
              randomObj(0); 
        } else if (amount.value == 25){
             randomObj(1);
        } else if (amount.value == 50){
             randomObj(2);
        } else if (amount.value == 100){
              randomObj(3); 
        } else if (amount.value == 250){
              randomObj(4);  
        } else if (amount.value == 'more'){
              randomObj(5);
        }
        displayText()
        });    

// GETS RANDOM ARRAY FROM AOI 
  function randomObj(e){
  return  idea = aoi[e][Math.floor(Math.random()*aoi[e].length)]
  }

// THIS FUNCTIONS DISPLAYS THE TEXT FOR IDEA, LINK, AND LABEL
  function displayText(){
    // THIS FUNCTION CREATES A H3 FOR THE IDEA
      function ideaH3(e){
        displayA.innerHTML = "";
        displayA.appendChild(document.createTextNode(e))
        }
    // THIS FUNCTION CREATES A H4 FOR THE IDEA LINK TO DISPLAY MAP
      function link (){
        displayB.innerHTML = "";
        displayB.appendChild(document.createTextNode('Click to find a place!')) 
        } 
    // THIS FUNCTION CREATES THE MAP
      function map (e){
        displayC.setAttribute("src", mapLink());
        }
    //   THE FUNCTIONS ARE RAN HERE
      ideaH3(idea.idea)
      link()
      map()   
      }

// THIS FUNCTION GIVES THE MAP A SOURCE LINK WITH AOI.LINK INFO
  function mapLink(){   
  return "https://www.google.com/maps/embed/v1/place?key=AIzaSyAfiiiKmji3_KyUJ5pdlEibiyBD3sHHvq0&q=" + idea.link
  };

// THIS FUNCTION SHOWS THE MAP ONCE THE LINK IS CLICKED
    displayB.addEventListener('click', function showMap(){
      document.getElementById("location").className="slideup";  
      document.getElementById("location").style.visibility = "visible";
    });

// Array of ideas ALL 
  var aoi = [
    
  //                     FREE IDEAS [0]
      [
      {idea: 'Play Kickball', link : 'Kickball'},
      {idea: 'Go for a run', link : 'Running paths'}, 
      {idea: 'Check out the community calendar', link : 'public library'},
      {idea: 'Listen to some podcasts', link : 'radio station'},  
      {idea: 'Play board games', link : 'toy store'},
      {idea: 'Bake a loaf of homemade bread', link : 'grocery store'},  
      {idea: 'Teach yourself how to juggle', link : 'grocery store'},
      {idea: 'Learn how to change your car’s oil', link : 'auto supplies'},  
      {idea: 'Meet your neighbors', link : 'next to me'},
      {idea: 'Clear out your media collection of books, DVDs, and CDs', link : 'goodwill'},  
      {idea: 'Make decisions about and write out your will', link : 'will laywer'},
      {idea: 'Do a household maintenance walk-through', link : 'home depot'},   
      {idea: 'Organize a self-guided walking tour', link:'public park'}
      ], 
             
  //                       $25 IDEAS [1]
     [
     {idea: '$25', link : 'local car wash'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}
     ],
             
  //                       $50 IDEAS [2]
     [
     {idea: 'wash car', link : 'local car wash'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}
     ],
      
  //                       $100 IDEAS [3]
     [
     {idea: 'wash car', link : 'local car wash'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}
     ],
  
  //                       $250 IDEAS [4]
     [
     {idea: 'Go Skydiving', link : 'LINK'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}
     ],

  //                       $500 IDEAS [5]
     [
     {idea: 'Travel', link : 'Somewhere new'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}
     ]];

