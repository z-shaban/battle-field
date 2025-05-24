import { Human, Computer } from './player.js';
import { Ship } from './ship.js';
import { renderBoard } from './dom.js';

export function startGame() {
  const human = new Human();
  const theComputer = new Computer();

  const humanShip1 = new Ship(2);
  const humanShip2 = new Ship(3);
  const humanShip3 = new Ship(4);

  const computerShip1 = new Ship(2);
  const computerShip2 = new Ship(3);
  const computerShip3 = new Ship(4);

  human.board.placeShips(humanShip1, [
    [0, 0],
    [0, 1],
  ]);
  human.board.placeShips(humanShip2, [
    [0, 2],
    [0, 3],
    [0, 4],
  ]);

  human.board.placeShips(humanShip3, [
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
  ]);
  theComputer.board.placeShips(computerShip1, [
    [2, 0],
    [2, 1],
  ]);
  theComputer.board.placeShips(computerShip2, [
    [2, 2],
    [2, 3],
    [2, 4],
  ]);

  theComputer.board.placeShips(computerShip3, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
  ]);

  renderBoard(human.board, 'human-board', false);
  renderBoard(theComputer.board, 'computer-board', true);
}
