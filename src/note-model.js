var Note = function (text) {
  this.text = text;
};

Note.prototype.contents = function () {
  return this.text;
};
