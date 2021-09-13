const students = [
  'Paul',
 'George',
  'Lucas'
];

function addStudent(student) {
    students.push(student);
}

function addAnother(student) {
  students.unshift(student);
}


addStudent('Marco');

addAnother('Giulia');

console.log(students);


// In questo caso abbiamo usato il metodo più semplice ".push", ve ne sono altri come ".unshift" (aggiunto).

// Possiamo aggiungere altri elementi ad un array readonly, poichè "const" non definisce un valore costante, bensì 
// definisce un riferimento costante ad un valore, ergo NON possiamo riassegnare queste costanti ma 
// possiamo cambiare gli elementi al loro interno.



// function addStudent(student) {
 
// }

// addStudent('Marco');
// console.log(students);