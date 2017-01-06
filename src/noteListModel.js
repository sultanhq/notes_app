(function(exports) {

  function NoteList() {
    this.notesArr = [];
  }

  NoteList.prototype.addNote = function(text) {
    var newNote = new Note(text);
    this.notesArr.push(newNote);
  };

  NoteList.prototype.getAllNotes = function() {
    return this.notesArr;
  };

  NoteList.prototype.getSingleNote = function(index) {
    return this.notesArr[index];
  };

  NoteList.prototype.getHtmlList = function() {
    str = "";
    for (var i = 0; i < this.notesArr.length; i++) {
      str += "<li><div>" + this.notesArr[i].getText().slice(0,20) + "</div></li>";
    }
    str = "<ul>" + str + "</ul>";
    return str;
  };


  NoteList.prototype.getSingleNoteHtml = function(index) {
    str = "";
    str += "<div>" + this.notesArr[index].getText() + "</div>";
    return str;
  };

  exports.NoteList = NoteList;
})(this);
