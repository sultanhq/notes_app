"use strict";

(function testAddNote(){
  var noteList = new NoteList();
  noteList.addNote("Hello, world");

  if(noteList.notesArr[0].getText() !== "Hello, world") {
    throw new Error("Failed: The note wasn't saved");
  } else {
    console.log("Passed: The note is saved");
  }
})();

(function testGetAllNotes(){
  var noteList = new NoteList();
  noteList.addNote("Hello, world");
  noteList.addNote("Favorite curry: Amok");

  if(noteList.getAllNotes().includes(noteList.notes[0])){
    console.log("Passed: It returns all the note models stored in the array.");
  } else {
    throw new Error("Failed: It doesn't return all the note models stored in the array.");
  }
})();
