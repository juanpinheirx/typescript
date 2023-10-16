// Union Types is the method to get more types into variables, functions or returns

function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

// with this, my functin is able to receive a number or string as ID. if i try to get an boolean into this function, i'll get an error from typescript.

function printId(id: number | string) {
  console.log(id.toUpperCase());
}

printId(101); // if i try to do the toToUpperCase() method, i'll get an error even before starting my function because this method is just for strings, not numbers as my function requires.

function printId2(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId2(101); // to avoid errors, an simple verification like this will be enough.