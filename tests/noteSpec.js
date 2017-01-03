// test specs
//test for the initialization of the notes object

function noteClassDefined() {
  if (typeof(Note) === "undefined") {
    throw new Error("Note is not defined");
  } else {
    console.log("noteClassDefined test passed");
  }
}
noteClassDefined();

function noteIsTypeOfNote() {
  var note = new Note();
  if (note instanceof Note === false) {
    throw new Error("Note is not defined");
  } else {
    console.log("noteIsTypeOfNote test passed");
  }
}

noteIsTypeOfNote();


function noteMessageExistsUponCreation() {
  var note = new Note("Hello World");
  if (note.message !== "Hello World") {
    throw new Error("Note message does not exist");
  } else {
    console.log("noteMessageExistsUponCreation test passed");
  }
}

noteMessageExistsUponCreation();
