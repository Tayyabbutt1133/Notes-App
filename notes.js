const notesArea = document.querySelector(".notescontainer");
const CreateBtn = document.querySelector(".Btn");
let notes = document.querySelectorAll(".input-Box");




function showNotes() {
  notesArea.innerHTML = localStorage.getItem("notes");
}
showNotes();

// This is used to actually store the notes in the local storage
function updateStorage() {
  localStorage.setItem("notes", notesArea.innerHTML);
}



// This will work when we click on create button
CreateBtn.addEventListener("click", (e) => {
  let inputBox = document.createElement("p");
  let image = document.createElement("img");
  inputBox.className = "input-Box";
  inputBox.setAttribute("contenteditable", "true");
  image.src = "images/delete.png";
  // this will add the input box and image in the notes area
  notesArea.appendChild(inputBox).appendChild(image);


});


notesArea.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-Box");
    notes.forEach(nt => {
      nt.addEventListener =  ("Keyup",()=>{
        updateStorage();
      });
    });
  }
});


document.addEventListener("keydown",event=>{
  if(event.key==="Enter" )
  {
  document.execCommand("insertLineBreak");
  event.preventDefault();
  }
})








