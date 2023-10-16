// here is some type-annotations
const user: string = 'Juan';
const age: number = 26;
const italian: boolean = true // italian wannabe

// now with functions

// this function gets a string as parameter, and with ts i'm able to guarantee this type.
function greet(name: string) {
  console.log(`Olá, ${name.toUpperCase()}!`);
} // trying to get a number in this function will bring me an error.

function getFavoriteNumber(): number {
  return 26;
} // with number

function greeting(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
} // when the value is null. its the principle "better explicit than implicit" (that's what she said).