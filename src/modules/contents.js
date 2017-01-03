(function(note) {
  function contents(note) {
    return note.text;
  }
  note.contents = contents;
})(this);
