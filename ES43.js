class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError();
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError();
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError();
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error{
  constructor(){
    super()
    this.name = (`Errore`);
    this.message = (`La cifra è negativa.`);
  }
}

class WithdrawNotPermittedError extends Error{
  constructor(){
    super()
    this.name = (`Errore`);
    this.message = (`L'ammontare richiesto eccede il conto.`);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}