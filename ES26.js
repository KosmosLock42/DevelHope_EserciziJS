function Person (firstName, lastName) {
  this.nome = firstName;
  this.cognome = lastName;
  this.fullName = () => 
   `${this.nome} ${this.cognome}`;
}


const john = new Person('John', 'Doe');
const simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
 console.log(simon.fullName()); // Simon Collins


// console.log(john);