'use strict';

(function(exports) {
  var LIST_NOTE_LENGTH = 20;

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.seeNoteList = function() {
    return this._noteList;
  };

  NoteListView.prototype.displayHTML = function() {
    var allNotes = this._noteList.seeList();
    var string   = "<ul>";
    for (var i = 0; i < allNotes.length; i++ ) {
      string += ("<li><div>" + allNotes[i].readNote().slice(0,(LIST_NOTE_LENGTH)) + "</div></li>");
    }
    string += "</ul>";
    return string;

  }


  exports.NoteListView = NoteListView;

})(this);
