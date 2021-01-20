

function shoppingList(arrayOfPeople) {
let content = document.querySelector("#content");
document.body.appendChild(content);
let unOrdered = document.createElement("UL");
document.getElementById("content").appendChild(unOrdered);
// Write your code here...

  for(let i = 0; i < shopping.length; i++){
    let  list = document.createElement("LI"); 
  list.appendChild(document.createTextNode(shopping[i])); 
    //array[i] = shopping[i];
   // shoppingList.innerHTML = `${shopping[i].name}`;
   unOrdered.appendChild(list);
 }

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
