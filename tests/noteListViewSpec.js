var view = new View(new List());

function createNewNoteListView() {

  if (typeof(view.list) === "undefined") {
    throw new Error("A new List object wasn't instantiated");
  } else {
    console.log("createNewNoteListViewtest passed");
  }
}
createNewNoteListView();

function returnsListModelHtml() {
  view.list.notes = [];
  view.list.notes[0] = new Note("I like beer");
  view.list.notes[1] = new Note("I like pizza");

  if (htmlList(view.list) !== "<ul><li><div>I like beer</div></li><li><div>I like pizza</div></li></ul>") {
    throw new Error("Returned incorrect string");
  } else {
    console.log("%c returnsListModelHtml  passed", "color: green");
  }
}
returnsListModelHtml();

function handlesAnyNumberOfNotes() {
  view.list.notes = [];
  if (htmlList(view.list) === "") {
    throw new Error("Method is incorrectly returning data");
  } else {
    console.log("handlesAnyNumberOfNotes  passed");
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
    console.log("%c checkForListInView passed", "color: green");
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
    console.log("%c listConvertedToHtml passed", "color: green");
  }

}

listConvertedToHtml();
