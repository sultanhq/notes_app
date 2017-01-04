var noteList = new List();

createNote(noteList,"I like Nutella");

(function changeDiv () {
  var elem = document.getElementById('app');
  elem.innerHTML = htmlList(noteList);
})();
