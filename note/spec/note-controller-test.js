function testControllerCanBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
  console.log("noteController is instantiated");
};

function testControllerInsertHTML() {

  var noteList = new NoteList
  var note = new Note("favourite drink: beer");
  noteList.saveNote(note);
  var listView = new NoteListView(noteList)
  var noteController = new NoteController(noteList)
  var string = "<ul><li><div>favourite drink: bee</div></li></ul>"
  assert.isTrue(noteController.insertHTML() === string);
  console.log("This test returned: " + noteController.insertHTML());

}


testControllerCanBeInstantiated();
testControllerInsertHTML();
