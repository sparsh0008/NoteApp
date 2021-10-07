let btn = document.getElementById('addBtn');
console.log(btn);
showNotes();

btn.addEventListener('click', function () {
    let addTxt = document.getElementById('addTxt');
    console.log(addTxt.value);

    let noteItem = localStorage.getItem("notes");
    if (noteItem == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(noteItem);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    console.log(notesObj);
    addTxt.value = "";

    showNotes();
});

function showNotes() {
    let noteItem = localStorage.getItem("notes");
    if (noteItem == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(noteItem);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button onclick="deleteNote(${index})" class="btn btn-primary">Delete note</button>
        </div>
    </div>`
    });

    let elemNotes = document.getElementById('notes');
    if (notesObj.length == 0) {
        elemNotes.innerHTML = `Nothing to show here`
    }
    else {
        elemNotes.innerHTML = html
    }
}
function deleteNote(index) {
    console.log("I am deleting ", index);
    let noteItem = localStorage.getItem("notes");
    if (noteItem == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(noteItem);
    }
    
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};