const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [attr, val] of Object.entries(person)) {
  console.log(`${attr}: ${val}`);
}