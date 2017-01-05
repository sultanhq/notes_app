(function(exports) {

  function NoteController(noteList){
    this.noteList = noteList;
    var note = new Note("favourite drink: beer");
    noteList.saveNote(note);
    this.listView = new NoteListView(noteList);
  };

  NoteController.prototype.insertHTML = function(){
    var html = this.listView.displayHTML();
    var elem = this.getElement();
    return elem.innerHTML = html;
  };

  NoteController.prototype.getElement = function(){
    var app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);

    return document.getElementById("app");
  };

  exports.NoteController = NoteController;

})(this);
