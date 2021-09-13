// function getKeys() {
//   return Object.keys(person);
// }

function getKeys(obj) {
  let chiavi = [];
  for (const key in obj) {
    chiavi.push(key);
  }


  return chiavi
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);