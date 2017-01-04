'use strict'

function testNewNoteListViewCreated() {
  var noteList     = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.seeNoteList() === noteList);
  console.log("This returned: " + noteListView.seeNoteList())
};

function testNewNoteListViewCreated() {
  var note1        = new Note("Yolo");
  var note2        = new Note("Yoko");
  var noteList     = new NoteList();
  noteList.saveNote(note1);
  noteList.saveNote(note2);
  var noteListView = new NoteListView(noteList);
  var html         = "<ul><li><div>Yolo</div></li><li><div>Yoko</div></li></ul>";
  assert.isTrue(noteListView.displayHTML() === html );
  console.log("This returned: " + noteListView.displayHTML());
};


testNewNoteListViewCreated();
