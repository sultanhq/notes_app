(function(list) {

  function createNote(list,text) {
    var note = new Note(text);
    // console.log(list)
    note.id = list.notes.length;
    list.notes.push(note);
  }

  list.createNote = createNote;

})(this);
