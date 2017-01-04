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

  function NoteDouble() {
    this.text = "I like Nutella";
  }

  function NoteListDouble() {
    this.notes = [noteDouble];
  }

  var noteDouble = new NoteDouble();
  var noteListDouble = new NoteListDouble();

  if (htmlList(noteListDouble) !== "<ul><li><div>I like Nutella</div></li></ul>") {
    throw new Error("List item has not been created");
  } else {
    console.log("%clistConvertedToHtml passed", "color: green");
  }

}

listConvertedToHtml();


(function() {

  function NoteDouble() {
    this.text = "I like Nutella so so so so so much";
  }

  function NoteDouble2() {
    this.text = "I really really REALLY hate jam";
  }

  function NoteListDouble() {
    this.notes = [noteDouble, noteDouble2];
  }

  var noteDouble = new NoteDouble();
  var noteDouble2 = new NoteDouble2();
  var noteListDouble = new NoteListDouble();

  if (htmlList(noteListDouble) !== "<ul><li><div>I like Nutella so s</div></li><li><div>I really really REA</div></li></ul>") {
    throw new Error("Text not returned correctly");
  } else {
    console.log("%ctruncatedNotesView passed", "color: green");
  }


})();
