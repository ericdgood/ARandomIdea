
    // Gets value of dollar amount
var amount = document.querySelector('#amount');
   // targets the dom to place the idea
var displayA = document.querySelector('#idea');
   // targets the dom to place the link
var displayB = document.querySelector('#link');
   // targets the dom to place the link
var displayC = document.querySelector('h4');
 

// THIS FUNCTIONS DISPLAYS THE TEXT FOR IDEA, LINK, AND LABEL
function displayText(){
  // CREATES A H3 FOR THE IDEA
  function ideaH3 (e){
    displayA.innerHTML = "";
    displayA.appendChild(document.createTextNode(e))
  }
    // CREATES A H4 FOR THE IDEA LINK
  function label (){
    displayC.innerHTML = "";
    displayC.appendChild(document.createTextNode('Click the link to learn more!')) 
  } 
  // CREATES THE LINK H2
  function linkH2 (e){
    displayB.innerHTML = "";
    displayB.appendChild(document.createTextNode(e))
    displayB.setAttribute("href", idea.href);
  }
//   THE FUNCTIONS ARE RAN HERE
    ideaH3(idea.idea)
    label()
    linkH2(idea.link)   
  }

  // GETS RANDOM ARRAY FROM AOI 
  function randomObj(e){
  return  idea = aoi[e][Math.floor(Math.random()*aoi[e].length)]
}

   //   IDEA BTN RUNS AMOUNT FUNCTION
$('#btn').click(function idea() { 
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

 
               // Array of ideas ALL 
  var aoi = [
    
 //                     FREE IDEAS [0]
    [
      {idea: 'play Kickball', link : 'local sport team', href : 'http://www.orlandosportandsocialclub.com/pages/kickball'},
      {idea: 'go for a run', link : 'Running paths', href : 'https://www.google.com/search?q=running+paths+near+me'},  
      {idea: 'learn drums', link:'youtube drums'}
   ], 
             
//                       $25 IDEAS [1]
     [{idea: '$25', link : 'local car wash'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}],
             
//                       $50 IDEAS [2]
     [{idea: 'wash car', link : 'local car wash'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}],
      
//                       $100 IDEAS [3]
     [{idea: 'wash car', link : 'local car wash'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}],
  
//                       $250 IDEAS [4]
     [{idea: 'Go Skydiving', link : 'LINK'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}],

//                       $500 IDEAS [5]
     [{idea: 'Travel', link : 'Somewhere new'},
     {idea: 'make dinner', link : 'grocery store'},
     {idea: 'build a bird house', link:'home depot'}]];