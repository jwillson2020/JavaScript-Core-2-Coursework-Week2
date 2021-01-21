function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  document.body.appendChild(content);
  document.getElementById("content").style.backgroundColor = "lightblue";
  let pTag = document.createElement("P");
  content.appendChild(pTag);
  let selectTag = document.createElement("SELECT");
  pTag.appendChild(selectTag);

  for(let i = 0; i < colours.length; i++){
  let optionTag = document.createElement("OPTION");
  selectTag.appendChild(optionTag);
  optionTag.appendChild(document.createTextNode(colours[i])); 
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
