var list = new List();

function listClassDefined() {
  if (typeof(List) === "undefined") {
    throw new Error("List is not defined");
  } else {
    console.log("listClassDefined test passed");
  }
}
listClassDefined();

function listStoresNotes() {
  if (list.notes instanceof Array === false) {
    throw new Error("notes object is not an array");
  } else {
    console.log("listStoresNotes test passed");
  }
}
listStoresNotes();

function returnsAllNotes() {

  list.notes[0] = new Note("I like beer");
  list.notes[1] = new Note("I like pizza");

  if (displayNotes(list).length !== 2) {
    throw new Error("Array length is incorrect");
  } else {
    console.log("returnsAllNotes test passed");
  }
}

returnsAllNotes();
