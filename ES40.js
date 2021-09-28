class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get firstName(){
    return this._firstName; 
  }
  set firstName(newName){
    this._firstName = newName;
  }

  get lastName(){
    return this._lastName;
  }
  set lastName(newSurname){
    this._lastName = newSurname;
  }

  get age(){
    return this._age;
  }
  set age(newAge){
    this._age = newAge;
  }

  get fullName(){
    return (`Ciao, sono ${this.firstName} ${this.lastName}.`);
   }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);