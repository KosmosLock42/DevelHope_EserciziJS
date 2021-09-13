const person = {
  firstName: 'John',
  lastName: 'Doe',
  // address: {
  //   city: `London`,
  //   nation: `UK`,
  //   street: `Craven Road 7`
  // }
};
//   fullName() {
//   return `${person.firstName} ${person.lastName}`
//   }
// }




  console.log(person.address?.["city"]);
  console.log(person.fullName?.());


// Mi sono accorto solo dopo che richiedeva l'optional chaining. Credo di averlo implementato
// correttamente (eliminando i valori aggiunti restituisce una coppia di undefined,
// facendo uno switch tra valori aggiunti e optional chaining, fornisce i nuovi valori).

