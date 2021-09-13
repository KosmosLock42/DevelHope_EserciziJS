function canPlay() {
  let personName;
  if (true) {
  personName = 'Paul';
  }




  personName += ' plays football'; // Argh! personName is not defined
/* personName = personName + 'plays football'  */



  console.log(personName);
}

canPlay();