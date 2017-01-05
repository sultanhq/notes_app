'use strict';

(function testNewSingleNoteCreated() {
  function NoteDouble() {
    this.text = "test note";
  }
  var noteDouble = new NoteDouble();

  var singleNoteView = new SingleNoteView(noteDouble);

  assert.isTrue(singleNoteView instanceof SingleNoteView);
})();

(function() {
  function NoteDouble() {
    this.text = "test note";
  }
  var noteDouble = new NoteDouble();

  var singleNoteView = new SingleNoteView(noteDouble);

    assert.isTrue(singleNoteView.returnSingleNote() === "<div>test note</div>");
})()
