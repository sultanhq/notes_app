(function(exports) {

  function NoteController(noteList) {
    var app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
    var elem = document.getElementById('app');
    elem.innerHTML = noteList.getHtmlList();
  }

  exports.NoteController = NoteController;
})(this);
