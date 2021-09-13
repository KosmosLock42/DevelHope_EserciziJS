const person = {
  get firstName () {
    return this._firstName;
  },
  set firstName (otherFN) {
    this._firstName = otherFN;
  },
  get lastName () {
    return this._lastName;
  },
  set lastName (otherLN) {
    this._lastName = otherLN;
  },
  fullName() {
    return (`${this.firstName} ${this.lastName}`);
  }
}

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";

simon.firstName = "Simon";
simon.lastName = "Collins";



console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins