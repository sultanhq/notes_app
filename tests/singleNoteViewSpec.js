(function () {

    function NoteDouble2() {
      this.text = "I don't like jam";
    }
    var noteDouble2 = new NoteDouble2();

    if (singleView(noteDouble2) !== "<div>I don't like jam</div>") {
      throw new Error("Note not returned.");
    }
    else {
    console.log("%csingleView function  passed", "color: green");
    }

})();
