(function(exports) {

  function NoteController(noteList){
    this.noteList = noteList;
    var note = new Note("favourite drink: beer");
    noteList.saveNote(note);
    this.listView = new NoteListView(noteList);
  };

  NoteController.prototype.insertHTML = function(){
    var html = this.listView.displayHTML();
    var element = this.getElement();
    element.innerHTML = html;
  };

  NoteController.prototype.getElement = function(){
    return document.getElementById("app");
  };

  exports.NoteController = NoteController;

})(this);
