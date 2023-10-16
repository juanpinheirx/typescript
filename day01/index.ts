// Union Types is the method to get more types into variables, functions or returns

function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

// with this, my functin is able to receive a number or string as ID.