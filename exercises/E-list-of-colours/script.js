function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  document.body.appendChild(content);
  document.getElementById("content").style.backgroundColor = "lightblue";
  let pTag = document.createElement("P");
  content.appendChild(pTag);
  let selectTag = document.createElement("SELECT");
  pTag.appendChild(selectTag);
  selectTag.setAttribute("id", "selectMe")

  for(let i = 0; i < colours.length; i++){
  let optionTag = document.createElement("OPTION");
  selectTag.appendChild(optionTag);
  optionTag.appendChild(document.createTextNode(colours[i])); 
  optionTag.setAttribute("id", "myOption");
  optionTag.setAttribute("value", (colours[i]));
   //var x = "colours[i]";
   document.querySelector("#selectMe").addEventListener("click", myFunction );

  
  }
  function myFunction() {
    //var selectValue = document.getElementById(("colour[i]".value));
      //var x = colours[i];
      document.getElementById("myTest").style.backgroundColor = "red";
     // console.log(x);
  }


  let testTag = document.createElement("P");
  document.body.appendChild(testTag);
  testTag.setAttribute("id", "myTest");
  document.getElementById("myTest").style.maxWidth = "400px"; 
  document.getElementById("myTest").style.maxHeight = "400px"; 
  //document.getElementById("myTest").style.objectPosition = "400  400";
  //document.getElementById("myTest").style.align = "center";
  document.getElementById("myTest").style.backgroundColor = "grey";
  document.getElementById("myTest").innerHTML = "Test Colour";

  
    
  

  //for(let h = 0; h< colours.length; h++){

  //}

  //document.querySelectorAll('#myOption').forEach(item => {
    //item.addEventListener('click', event => {
      //handle click
      //myTest.style.backgroundColor = "red";
    //})
  //})
/*
  if (colours[i] === "red" ) {
   
    myTest.style.backgroundColor = "red";}
    else {
    myTest.style.backgroundColor = "grey";} 

}
  */

}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
