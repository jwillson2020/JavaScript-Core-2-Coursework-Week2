function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  document.body.appendChild(content);
  document.getElementById("content").style.backgroundColor = "lightblue";
  
  let pTag = document.createElement("P");
  document.getElementById("content").appendChild(pTag);
  let unOrdered = document.createElement("UL");
 

  
  for(let i = 0; i < books.length; i++){
   
    let lTag = document.createElement("LI");
    let title = document.createElement("H2"); // need to be in the loop oops!
  let author = document.createElement("H3");
  let alreadyRead = document.createElement("H4");
  title.innerHTML = `${books[i].title}`;
author.innerHTML = `${books[i].author}`;
alreadyRead.innerHTML =  `${books[i].alreadyRead}`;
lTag.setAttribute("id", "myList");

pTag.appendChild(unOrdered);
unOrdered.appendChild(lTag);
lTag.appendChild(title);
lTag.appendChild(author);
lTag.appendChild(alreadyRead);

document.getElementById("myList").style.paddingRight = "50px";
document.getElementById("myList").style.maxWidth = "400px"; 
const x = window.pageXOffset || document.documentElement.scrollLeft;
const y = scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (books[i].alreadyRead === true ) {
   
lTag.style.backgroundColor = "green";}
else {
  lTag.style.backgroundColor = "red";} 



 }
 
 document.getElementById("myList").style.objectPosition = "0 10%";
 document.getElementById("myList").style.maxWidth = "400px"; 
}



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);