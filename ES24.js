const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values


function getKeys() {
  for (let data of Object.values(person)) {
    console.log(`${data}`);
  }
} 

console.log(getKeys());


//Stesso errore di prima, credo abbia a che fare con il doppio console.log.