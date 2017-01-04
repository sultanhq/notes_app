var list = new List();

(function() {
  if (typeof(List) === "undefined") {
    throw new Error("List is not defined");
  } else {
    console.log("%clistClassDefined test passed", "color: green");
  }
})();

(function() {
  if (list.notes instanceof Array === false) {
    throw new Error("notes object is not an array");
  } else {
    console.log("%clistStoresNotes test passed", "color: green");
  }
})();

(function() {
  list.notes[0] = new Note("I like beer");
  list.notes[1] = new Note("I like pizza");

  if (displayNotes(list).length !== 2) {
    throw new Error("Array length is incorrect");
  } else {
    console.log("%creturnsAllNotes test passed", "color: green");
  }
})();

(function() {

  list.notes = [];
  createNote(list, "I like beer");

  if (displayNotes(list).length !== 1) {
    throw new Error("Note not saved");
  } else {
    console.log("%ccreatesNewNote test passed", "color: green");
  }
})();
