'use strict';

function testNewNoteCreated() {
  var note = new Note('hi!');
  assert.isTrue(note.readNote() === 'hi!')
  console.log("This returned: " + note.readNote())
};
testNewNoteCreated();

function testNewNoteNumber() {
  var note = new Note("numberd note test");
  var noteList = new NoteList()
  console.log(note)
  noteList.saveNote(note);
  assert.isTrue(note.number === 0);
};

testNewNoteNumber();
