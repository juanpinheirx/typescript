const matterObj = (state: string) => {
  return console.log(`${state} is the matter condition`);
} // function that returns the matter state of an object in nature.

const ID = (id: string | number) => {
  return console.log(`the id of this person is ${id}`);
  // function that returns the id of a person even if it is a string or a number
}

// these two above are type combinations (union types)

// now lets see some type aliases

type RestaurantReserve = {
  person1: string;
  person2: string;
  person1age: number | string;
  person2age: number | string;
} // data alias, a custom data with its specific types.

const reservation = (data: RestaurantReserve) => {
  return console.log(`${data.person1} and ${data.person2} are expected to be at table 10 tonight. Their ages are: ${data.person1age} and ${data.person2age} respectevely.`);
} // function that return a reservation using a custom type of information that was create on line 14

type Address = {
  street: string | number;
  neighbourhood: string;
  houseNumber: number;
  country: string;
  postalCode: number;
}

const address = (data: Address) => {
  return console.log(`This persons address is: street ${data.street} in ${data.neighbourhood}. The house number is ${data.houseNumber}. This address is in ${data.country}. The postal code is: ${data.postalCode}`);
} // function that return an address with type aliases