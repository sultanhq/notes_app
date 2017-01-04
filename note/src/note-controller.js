(function(exports) {

  function NoteController(noteList){
    this.noteList = noteList;
    var note = new Note("favourite drink: beer");
    noteList.saveNote(note);
    this.listView = new NoteListView(noteList);
  };

  NoteController.prototype.insertHTML = function(){
    var html = this.listView.displayHTML();
    var element = document.getElementById("app");
    element.innerHTML = html;
  };

  exports.NoteController = NoteController;

})(this);
