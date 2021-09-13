const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person1.firstName = "Simon";

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);


//person1 e person2 in virtù della dichiarazione alla riga 7 diventano la "stessa persona", ovvero,
//person2 andrà a prendere lo stesso valore di attributo di person1 lo stesso oggetto creato in partenza
//e pertanto modificare un valore di attributo di person1, finirà col riflettersi su person2 poichè "attingono"
//alla stessa fonte, ovvero firstName. (inizialmente non capivo se il "bug" fosse voluto o meno.)