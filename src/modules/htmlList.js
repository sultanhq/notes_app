(function(view) {

  function htmlList(list) {
    if (list.notes.length === 0) return;
    // console.log(list);
    var output = ["<ul>"];
    displayNotes(list).forEach(function(note) {
      output.push("<li><div>" + note.text.slice(0, 19) + "</div></li>");
    });
    output.push("</ul>");
    return output.join("");
  }

  view.htmlList = htmlList;

})(this);
