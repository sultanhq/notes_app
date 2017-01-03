function createNewNoteListView () {
  var view = new View(new List());
  if(typeof(view.list) === "undefined" ) {
    throw new Error("A new List object wasn't instantiated");
  }
  else {
    console.log("createNewNoteListViewtest passed");
  }
}
createNewNoteListView ();
