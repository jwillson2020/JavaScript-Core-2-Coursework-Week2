function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  document.body.appendChild(content);
  document.getElementById("content").style.backgroundColor = "lightblue";
  let unOrdered = document.createElement("UL");
  let pTag = document.createElement("P");
  document.getElementById("content").appendChild(pTag);
  pTag.appendChild(unOrdered);
 

  
  for(let i = 0; i < books.length; i++){
    let lTag = document.createElement("LI");
    let title = document.createElement("H2"); // need to be in the loop oops!
  let author = document.createElement("H3");
  let alreadyRead = document.createElement("H4");
  title.innerHTML = `${books[i].title}`;
author.innerHTML = `${books[i].author}`;
alreadyRead.innerHTML =  `${books[i].alreadyRead}`;


}

//let alreadyRead =  `${books[i].alreadyRead}`;




unOrdered.appendChild(lTag);
lTag.appendChild(title);
lTag.appendChild(author);
lTag.appendChild(alreadyRead);
  
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