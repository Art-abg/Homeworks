// Create an Account class that have.
// Properties:
// id: it's should be a uniq
// name: it's should be a string
// balance: it's should be hidden property and should have get and set methods
// Methods:
// get and set methods for the balance
// credit which should increase a new amount on the balance
// debit which should decrease an amount from the balance
// transferTo which takes other account and amount and transfer from current balance to the
// balance of the given account
// identifyAccounts, this should be a static method for identify accounts by id of them

class Account {
  #balance;
  constructor(name, balance) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.name = name;
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }
  set balance(value) {
    this.#balance = value;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
  }
  debit(amount) {
    this.#balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
  }

  transferTo(obj, amount) {
    this.#balance -= amount;
    obj.#balance += amount;
    console.log(
      `Transferred $${amount} from ${this.name} account to ${obj.name} account`
    );
  }
  static identifyAccounts(obj1, obj2) {
    console.log(
      `Id of ${obj1.name} account is ${obj1.id}, and Id of ${obj2.name} account is ${obj1.id}`
    );
    return;
  }
}
const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);

console.log(saving.balance);
console.log(current.balance);

Account.identifyAccounts(current, saving);
