"use strict";

var noteList = new NoteList();
noteList.addNote("I like Nutella on Toast");
noteList.addNote("I Dislike Jam a huge ammount");

(function testAddNote() {
  if (noteList.getAllNotes()[0].getText() !== "I like Nutella on Toast") {
    throw new Error("Failed: The note wasn't saved");
  } else {
    console.log("Passed: The note is saved");
  }
})();

(function testGetAllNotes() {
  if (noteList.getAllNotes().includes(noteList.getAllNotes()[0])) {
    console.log("Passed: It returns all the note models stored in the array.");
  } else {
    throw new Error("Failed: It doesn't return all the note models stored in the array.");
  }
})();

(function testGetHtmlList() {
  if (noteList.getHtmlList() === "<ul><li><div>I like Nutella on To</div></li><li><div>I Dislike Jam a huge</div></li></ul>") {
    console.log("testGetHtmlList Passed");
  } else {
    throw new Error("Failed");
  }
})();

(function AppDivGetsCreated() {

  var elem = document.getElementById('app');
  if (elem.innerHTML === '<ul><li><div>I like Nutella on To</div></li><li><div>I Dislike Jam a huge</div></li></ul>') {
    console.log("AppDivGetsCreated test passed");

  } else {
    throw new Error("AppDivGetsCreated Failed");
  }
})();

(function singleNoteView(){

  if (noteList.getSingleNote(1) instanceof Note) {
    console.log("getSingleNote Passed");
  } else {
    throw new Error("Failed");
  }
})();


(function singleNoteHtml(){
  if (noteList.getSingleNoteHtml(1) === "<div>I Dislike Jam a huge ammount</div>") {
    console.log("singleNoteHtml Passed");
  } else {
    throw new Error("Failed");
  }
})();
