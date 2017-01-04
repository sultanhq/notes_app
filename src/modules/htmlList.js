(function (view) {

  function htmlList (list) {
    if (list.notes.length === 0 ) return;

    var output = ["<ul>"];
    displayNotes(list).forEach (function (note) {
      output.push("<li><div>"+note.text+"</div></li>");
    });
    output.push("</ul>");
    return output.join("");
  }

  view.htmlList = htmlList;

})(this);
