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
  var string = "<ul><li><div>favourite drink: beer</div></li></ul>"
 console.log(noteController.insertHTML())
  // noteController.insertHTML();
  assert.isTrue(noteController.insertHTML() === string);
  


}


testControllerCanBeInstantiated();
testControllerInsertHTML();
