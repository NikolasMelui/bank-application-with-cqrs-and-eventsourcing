'use strict';

class AccountCommand {
  constructor(account, operation, amount = 0) {
    this.account = account;
    this.operation = operation;
    this.amount = amount;
  }
}

module.exports = { AccountCommand };
