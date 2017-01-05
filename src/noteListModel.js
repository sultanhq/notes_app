(function(windowArg){

function NoteList(){
this.notesArr = [];
};

NoteList.prototype.addNote = function(text) {
  var newNote = new Note(text);
  this.notesArr.push(newNote);
};

NoteList.prototype.getAllNotes = function(){
  return this.notesArr;

};

windowArg.NoteList = NoteList;
})(this);
