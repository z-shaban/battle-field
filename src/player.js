import { GameBoard } from './gameBoard.js';

export class Player {
  constructor() {
    this.board = new GameBoard();
  }
}

export class Human extends Player {
  constructor() {
    super();
  }

  attack(computer, target) {
    computer.board.receiveAttack(target);
  }
}

export class Computer extends Player {
  constructor() {
    super();
  }

  getRandomTarget() {
    const target = [0, 0];
    target[0] = Math.floor(Math.random() * 10);
    target[1] = Math.floor(Math.random() * 10);
    return target;
  }

  attack(human) {
    const target = this.getRandomTarget();
    human.board.receiveAttack(target);
  }
}
