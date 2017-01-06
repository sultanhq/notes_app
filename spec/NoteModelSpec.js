"use strict";

(function(windowArg) {

  function testNoteModel() {
    var text = "Hello, world";
    var note = new Note(text);
    if (note.getText() !== "Hello, world") {
      throw new Error("The text wasn't saved");
    } else {
      console.log("Note function pass")
    }
  };
  windowArg.testNote = testNoteModel;

})(this);

testNote();
