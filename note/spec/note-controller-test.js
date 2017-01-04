function testControllerCanBeInstantiated(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
  console.log("noteController is instantiated");
};
testControllerCanBeInstantiated();
