(function(exports) {
  function singleView(note) {
    return ("<div>" + note.text + "</div>");
  }
  exports.singleView = singleView;
})(this);
