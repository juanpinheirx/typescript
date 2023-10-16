const person = {
  fistName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
} // this is an example of data that doesn't have to be typed because its already explicit what type it is.
// just as javascript, just moving my mouse over the data will show the type of the property.
// however, i remember that sometimes when using functions across files, its return isn't shown. is this a case where typescript is necessary?

function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName;
}

console.log(getFullName(person.fistName, person.lastName)); // "Frodo Baggings"

// this functions answers my question. in functions, type annotations are essencial to especify its parameter.