const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: `NY`
}


function getKeys() {
  for (let data of Object.keys(person)) {
    console.log(`${data}: ${person[data]}`);
  }
} 

console.log(getKeys());

//Non capisco proprio perchè riporti un valore "undefined" a fine lista.


// Print values of person using Object.keys

// const keys = getKeys()

// console.log(keys);