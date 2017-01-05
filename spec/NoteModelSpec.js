"use strict";

function testNodeModel() {
  var text = "Hello, world";
  var note = new Note(text);
  if (note.text !== "Hello, world") {
    throw new Error("The text wasn't saved")
  }
  else {console.log("Note function pass")}
};

testNodeModel();
