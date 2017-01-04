'use strict'

function testNewNoteListViewCreated() {
  var noteList     = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.seeNoteList() === noteList);
  console.log("This returned: " + noteListView.seeNoteList())
};

testNewNoteListViewCreated();
