'use strict';

class AccountQuery {
  constructor(account, operation) {
    this.account = account;
    this.operation = operation;
    this.rows = 0;
  }
}

module.exports = { AccountQuery };
