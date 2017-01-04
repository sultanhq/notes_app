var NoteController = function(noteList) {
  (function changeDiv() {

    var app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
    var elem = document.getElementById('app');
    // console.log(noteList);
    elem.innerHTML = htmlList(noteList);
  })();
};
