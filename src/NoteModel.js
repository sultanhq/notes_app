(function(exports){

function Note(inputString){
  this.text = inputString;
};
Note.prototype.getText = function(){
  return this.text;
};

exports.Note = Note ;

})(this);
