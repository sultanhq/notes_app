(function(list) {

  function createNote(list,text) {
    var note = new Note(text);
    list.notes.push(note);
  }

  list.createNote = createNote;

})(this);
