"use strict";

var noteList = new NoteList();
noteList.addNote("Hello, world");
noteList.addNote("Favorite curry: Amok");

(function testAddNote(){
  if(noteList.getAllNotes()[0].getText() !== "Hello, world") {
    throw new Error("Failed: The note wasn't saved");
  } else {
    console.log("Passed: The note is saved");
  }
})();

(function testGetAllNotes(){
  if(noteList.getAllNotes().includes(noteList.getAllNotes()[0])){
    console.log("Passed: It returns all the note models stored in the array.");
  } else {
    throw new Error("Failed: It doesn't return all the note models stored in the array.");
  }
})();

(function testGetHtmlList(){
  if(noteList.getHtmlList() == "<ul><li><div>Hello, world</div></li><li><div>Favorite curry: Amok</div></li></ul>") {
    console.log("Passed");
  } else {
    throw new Error("Failed");
  }
})();
