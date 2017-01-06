var view = new View(new List());

function createNewNoteListView() {

  if (typeof(view.list) === "undefined") {
    throw new Error("A new List object wasn't instantiated");
  } else {
    console.log("%ccreateNewNoteListViewtest passed", "color: green");
  }
}
createNewNoteListView();

function handlesAnyNumberOfNotes() {
  view.list.notes = [];
  if (htmlList(view.list) === "") {
    throw new Error("Method is incorrectly returning data");
  } else {
    console.log("%chandlesAnyNumberOfNotes  passed", "color: green");
  }
}
handlesAnyNumberOfNotes();

function checkForListInView() {

  function NoteDouble() {
    this.text = "I like Nutella";
  }

  function NoteListDouble() {
    this.notes = [noteDouble];
  }

  var noteDouble = new NoteDouble();
  var noteListDouble = new NoteListDouble();

  if (displayNotes(noteListDouble).length !== 1) {
    throw new Error("Note has not been created");
  } else {
    console.log("%ccheckForListInView passed", "color: green");
  }
}

checkForListInView();


function listConvertedToHtml() {



  function NoteListDouble() {
    this.notes = [];
  }

  var noteListDouble = new NoteListDouble();

  createNote(noteListDouble, "I like Nutella");

  if (htmlList(noteListDouble) !== "<ul><li><div><a href='#notes/0' id='0'>I like Nutella</a></div></li></ul>") {
    throw new Error("List item has not been created");
  } else {
    console.log("%clistConvertedToHtml passed", "color: green");
  }

}

listConvertedToHtml();


(function() {

  function NoteDouble() {
    this.text = "I like Nutella so so so so so much";
    this.id = 0;
  }

  function NoteDouble2() {
    this.text = "I really really REALLY hate jam";
    this.id = 1;
  }

  function NoteListDouble() {
    this.notes = [noteDouble, noteDouble2];
  }

  var noteDouble = new NoteDouble();
  var noteDouble2 = new NoteDouble2();
  var noteListDouble = new NoteListDouble();
  if (htmlList(noteListDouble) !== "<ul><li><div><a href='#notes/0' id='0'>I like Nutella so s</a></div></li><li><div><a href='#notes/1' id='1'>I really really REA</a></div></li></ul>") {
    throw new Error("Text not returned correctly");
  } else {
    console.log("%ctruncatedNotesView passed", "color: green");
  }


})();

(function() {

  function NoteDouble() {
    this.text = "I like Nutella so so so so so much";
    this.id = 0;
  }

  function NoteListDouble() {
    this.notes = [noteDouble];
  }
  var noteDouble = new NoteDouble();
  var noteListDouble = new NoteListDouble();

  if (displayNotes(noteListDouble)[0].id !== 0) {
    throw new Error("note has not had a number assigned");
  } else {
    console.log("%cNote has an individual number", "color: green");
  }

})();

(function() {
  function NoteDouble() {
    this.text = "I like Nutella so so so so so much";
    this.id = 0;
  }

  function NoteListDouble() {
    this.notes = [noteDouble];
  }
  var noteDouble = new NoteDouble();
  var noteListDouble = new NoteListDouble();

  displayNotes(noteListDouble);
  view.document.getElementById(0).click();
  if (!window.location.href.includes("#")) {
    throw new Error("URL has not changed");
  } else {
    console.log("%cURL has hashchanged", "color: green");
  }
})();
