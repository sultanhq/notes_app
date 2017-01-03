// test specs
//test for the initialization of the notes object
var note = new Note("Hello World");

function noteClassDefined() {
  if (typeof(Note) === "undefined") {
    throw new Error("Note is not defined");
  } else {
    console.log("noteClassDefined test passed");
  }
}
noteClassDefined();

function noteIsTypeOfNote() {

  if (note instanceof Note === false) {
    throw new Error("Note is not defined");
  } else {
    console.log("noteIsTypeOfNote test passed");
  }
}

noteIsTypeOfNote();


function noteMessageExistsUponCreation() {

  if (note.text !== "Hello World") {
    throw new Error("Note message does not exist");
  } else {
    console.log("noteMessageExistsUponCreation test passed");
  }
}

noteMessageExistsUponCreation();

function noteDisplaysText() {
  if (contents(note) === "undefined") {
    throw new Error("The function is not defined");
  } else if (contents(note) !== "Hello World") {
    throw new Error("The note does not contain text");
  } else {
    console.log("noteDisplaysText test passed");
  }
}
noteDisplaysText();


function noteContentModule() {
  if (contents(note) !== "Hello World") {
    throw new Error("Contents module undefined");
  } else {
    console.log("noteContentModule test passed");
  }
}

noteContentModule();
