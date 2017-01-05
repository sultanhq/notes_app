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

NoteList.prototype.getHtmlList = function(){
    str = "";
    for(var i = 0; i < this.notesArr.length; i++) {
      str += "<li><div>" + this.notesArr[i].getText() + "</div></li>";
    }
    str = "<ul>" + str + "</ul>";
    return str;
};

windowArg.NoteList = NoteList;
})(this);
