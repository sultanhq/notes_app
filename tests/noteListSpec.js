var list = new List();

function listClassDefined () {
  if (typeof(List) === "undefined") {
    throw new Error("List is not defined");
  }
  else {
      console.log("listClassDefined test passed");
  }
}
listClassDefined ();

function listStoresNotes () {
   if (list.notes instanceof Array === false) {
    throw new Error("notes object is not an array");
  }
  else {
    console.log("listStoresNotes test passed");
  }
}
listStoresNotes();
