var note = new Note("Hello World");

(function() {
  if (typeof(Note) === "undefined") {
    throw new Error("Note is not defined");
  } else {
    console.log("%cnoteClassDefined test passed", "color: green");
  }
})();

(function() {
  if (note instanceof Note === false) {
    throw new Error("Note is not defined");
  } else {
    console.log("%cnoteIsTypeOfNote test passed", "color: green");
  }
})();

(function() {
  if (note.text !== "Hello World") {
    throw new Error("Note message does not exist");
  } else {
    console.log("%cnoteMessageExistsUponCreation test passed", "color: green");
  }
})();

(function() {
  if (contents(note) === "undefined") {
    throw new Error("The function is not defined");
  } else if (contents(note) !== "Hello World") {
    throw new Error("The note does not contain text");
  } else {
    console.log("%cnoteDisplaysText test passed", "color: green");
  }
})();

(function() {
  if (contents(note) !== "Hello World") {
    throw new Error("Contents module undefined");
  } else {
    console.log("%cnoteContentModule test passed", "color: green");
  }
})();
