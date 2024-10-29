showNotes();
// if user add a not , added to local storage 
let addBtn = document.getElementById('addBtn');

// when someone click on this button
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    //Condition for --Dont Add Blank Text
    let value=addTxt.value;
    if(value===""){
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
    }else{
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    }
    // console.log(notesObj);
    showNotes();

});


// Function to show element from the local storage 

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card radius" style="width: 18rem;">
                
        <div class=" card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<b>Nothing to show! Use "Add a Note" Section above to add a Note</b>`;
    }
}

// Function to Delete a note
function deleteNote(index) {
    // console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    // splice take argument start that is index and delete it 
    notesObj.splice(index ,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputval = search.value.toLowerCase();
    // console.log("input event fired",inputval)
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
        // console.log(cardTxt);
    });
});

// when we click on search button 
function searchNote(){
    let search=document.getElementById('searchTxt');
    let inputval = search.value.toLowerCase();
    // console.log("input event fired",inputval)
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }else{
            element.style.display="none";
            
        }
        // console.log(cardTxt);
    });
}
