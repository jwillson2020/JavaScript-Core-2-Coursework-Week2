function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  document.body.appendChild(content);
  let  unOrdered = document.createElement("UL");
 // let  test = document.createElement("DIV");
 // document.body.appendChild(test);
  document.getElementById("content").appendChild(unOrdered);
  
for(let i = 0; i < todos.length; i++){
    let lTag = document.createElement("LI");
    
    lTag.innerHTML = `${todos[i].todo}`;
    unOrdered.appendChild(lTag);
    //unOrdered.appendChild(document.createTextNode(lTag[i])); 
    lTag.setAttribute("id", "myBtn");
  lTag.setAttribute("class", "undo");

// document.getElementById("myBtn").addEventListener("click",  function() { lTag.style.textDecoration = "line-through";});
//document.getElementById("myBtn").addEventListener("dblclick", function() { lTag.style.textDecoration = "none";});   
  //}}

  document.querySelectorAll('#myBtn').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      lTag.style.textDecoration = "line-through";
    })
  })

  document.querySelectorAll('.undo').forEach(item => {
    item.addEventListener('dblclick', event => {                //dblclick
      //handle click
      lTag.style.textDecoration = "none";
     // lTag.style.backgroundColor = "pink";
  })
})
}}

//function myFunction() {
  //var x = document.getElementsByTagName("LI")[i];
  
 // if (x.id === "myBtn") { 
  //  x.style.textDecoration = "line-through"
 //// }
//}
   // function lineThrough() {
  //lTag.style.textDecoration = "line-through";
   // }
   // function remove() {
  //lTag.style.textDecoration = "inherit";
    
      
    //list.appendChild(document.createTextNode(todos[i])); 
  



const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);