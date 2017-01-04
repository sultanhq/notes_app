'use strict';

(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.seeNoteList = function() {
    return this._noteList;
  };

  exports.NoteListView = NoteListView;

})(this);
