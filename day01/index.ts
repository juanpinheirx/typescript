type PersonalInfo = {
  name: string;
  birthYear: number;
}; // this is an custom data to be reused throughout my development

function printPersonalInfo(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978}); // with thast custom type, i can create a function that receives this custom data as parameter and return these types through dot notation.

type PersonalInfo2 = {
  name: string;
  birthYear: number | string;
}; // this one is a custom type with union. age now is able to receive two types.

type ID = number | string; // another simple example.