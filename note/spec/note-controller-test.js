function testControllerCanBeInstantiated(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
  console.log("noteController is instantiated");
};

function testControllerInsertHTML(){
  var noteList = new NoteList
  var listView = new NoteListView(noteList)
  var noteController = new NoteController(noteList)
  var string = "<ul><li><div>favourite drink: bee</div></li></ul>"
  // noteController.insertHTML();
  assert.isTrue(noteController.insertHTML() === string);
  console.log("This test returned: " + noteController.insertHTML())



}


testControllerCanBeInstantiated();
testControllerInsertHTML();
