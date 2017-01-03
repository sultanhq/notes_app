// test specs
//test for the initialization of the notes object

function noteClassDefined () {
  if (typeof(Note) === "undefined" ) {
    throw new Error("Note is not defined");
  }
}
noteClassDefined();
