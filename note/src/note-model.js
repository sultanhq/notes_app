'use strict';

(function(exports) {

  function Note(text) {
    this._text = text;
    this.number = null;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  exports.Note = Note;

})(this);
