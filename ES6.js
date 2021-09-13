// function adultFilter(persons) {
//   const result = persons.filter(adulto => adulto.age > 17);
//   return result;
// }



function adultFilter(persons) {
  const adulti = [];

  for (persona of persons) {
    if (persona.age > 17) {
      adulti.push(persona);
}
  }
 return adulti;
}

 const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
