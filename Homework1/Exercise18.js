// Given an object representing a bank account with properties like accountNumber, balance, and
// accountHolder. Write functions to deposit and withdraw money from the account.

const bankAccount = {
  accountNumber: "123456789",
  balance: 1000,
  accountHolder: "John Doe"
};

function updateBalance(amount, operation) {
  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid amount. Please enter a positive number.");
    return;
  }

  if (operation !== "deposit" && operation !== "withdraw") {
    console.log(
      "Invalid operation. Please enter either 'deposit' or 'withdraw'."
    );
    return;
  }

  if (operation === "deposit") {
    bankAccount.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${bankAccount.balance}`);
  }

  if (operation === "withdraw") {
    if (amount <= bankAccount.balance) {
      bankAccount.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${bankAccount.balance}`);
    } else {
      console.log("Insufficient balance or invalid withdrawal amount.");
    }
  }
}

updateBalance(500, "deposit"); // Output: Deposited $500. New balance: $1500
updateBalance(200, "withdraw"); // Output: Withdrew $200. New balance: $1300
updateBalance(-100, "deposit"); // Output: Invalid amount. Please enter a positive number.
updateBalance(5000, "withdraw"); // Output: Insufficient balance or invalid withdrawal amount.
