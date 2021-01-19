function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  
  
  for(let i = 0; i < arrayOfPeople.length; i++){
    let namePerson = document.createElement("H1"); // need to be in the loop oops!
  let  jobTitle = document.createElement("H2");
  namePerson.innerHTML = `${arrayOfPeople[i].name}`;
jobTitle.innerHTML = `${arrayOfPeople[i].job}`;
document.getElementById("content").appendChild(namePerson);
  document.getElementById("content").appendChild(jobTitle);

  }
  
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];


listOfNames(people);
