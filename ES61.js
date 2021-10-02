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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      let perGet = persons.find(person => person.id === id);
      if (perGet){
        resolve(perGet);
      }else{
         reject(`Non ci sono persone con questa ID.`)
      }
    }, 1000);
  });
}


function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      let jobGet = jobs.find(job => job.id === id);
      if (jobGet){
        resolve(jobGet);
      }else{
        reject(`Non ci sono lavori con questa ID.`)
      }
    }, 500);
  });
}




Promise.race([fetchPersonById(2), fetchJobById(2)])
.then((result) => console.log(result))
.catch((message) => console.log(`Errore: ${message}`));