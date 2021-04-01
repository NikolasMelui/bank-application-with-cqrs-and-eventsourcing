'use strict';

const { Bank } = require('./Bank');
const { AccountCommand } = require('./AccountCommand');

class BankWrite {
  constructor(eventBus) {
    this.bank = new Bank();
    this.commands = [];
    this.eventBus = eventBus;
  }

  createAccount(account) {
    const operation = 'Create';
    const command = new AccountCommand(account, operation);
    this.commands.push(command);
    this.eventBus.emit('command', command);
    this.bank.execute(command);
  }

  operation(account, amount) {
    const operation = amount < 0 ? 'Withdraw' : 'Income';
    const command = new AccountCommand(account, operation, Math.abs(amount));
    this.commands.push(command);
    this.eventBus.emit('command', command);
    this.bank.execute(command);
  }
}

module.exports = { BankWrite };
