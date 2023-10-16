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

// let sum = (a, b) => a + b
// sum(1, '2') => code example that ts prevents from error.

function printPersonalInfo(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 }); // this is an example with object type. i just have to define my data inside an object and its type annotation right after.

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false]; // examples with arrays are followed by [] after its annotations.

