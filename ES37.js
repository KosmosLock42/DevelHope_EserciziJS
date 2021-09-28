class BankAccount {
    total = 0;

    constructor(conto){
        this.total = conto;
    }

    
    deposit(banana) {
      this.total += banana;
    }

    withdraw(ananas){
       this.total -= ananas; 
    }

    view() {
        console.log(this.total);
    }

}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();