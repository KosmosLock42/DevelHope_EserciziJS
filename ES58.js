const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
let block = (persons.find(persona => persona.id === id));

      if (block) {
        return resolve(block);
      } else {
       reject(`Non esiste una persona con questo ID.`)
      }
    } ,1000);
  });
}

fetchPersonById(32).then((message) => 
console.log(message)).catch((message) =>{
console.log("Errore ID:" + message)
});