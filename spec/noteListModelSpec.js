"use strict";

(function(windowArg){

function testNoteList(){

  var noteList = new NoteList();

  noteList.addNote("Hello, world");
  if (noteList.notesArr[0].getText() !== "Hello, world") {
    throw new Error("The note wasn't saved")
  }
  else {console.log("The note is saved")}

};

windowArg.testNoteList = testNoteList
})(this);




testNoteList();
