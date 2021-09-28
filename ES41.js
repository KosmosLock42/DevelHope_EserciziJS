class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try{
      if (amount < 0){
        throw new Error("La somma è negativa!")
      }
    } catch(err){
      console.log(`OPS: ${err.message}`);
    }

    this.#amount += amount;
    
  }

  withdraw(amount) {
    try{
      if(amount < 0 || this.#amount < amount){
        throw new Error(`La somma è negativa o superiore a quella presente.`);
      }
    }catch(err){
      console.log(`OPS: ${err.message}`);
    }
 
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-20);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();