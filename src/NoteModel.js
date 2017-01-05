(function(windowArg){

function Note(inputString){
  this.text = inputString;
};
Note.prototype.getText = function(){
  return this.text;
};

windowArg.Note = Note ;

})(this);
