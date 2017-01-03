function listClassDefined () {
  if (typeof(List) === "undefined") {
    throw new Error("List is not defined");
  }
  else {
      console.log("listClassDefined test passed");
  }
}
listClassDefined ();
