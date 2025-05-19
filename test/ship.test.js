import { Ship } from '../src/ship.js';
import { gameBoard } from '../src/gameBoard.js';

describe('ship class', () => {
  let newShip;
  beforeEach(() => {
    newShip = new Ship(2);
  });

  test('hit', () => {
    newShip.hit();
    expect(newShip.hits).toBe(1);
  });

  test('has sunk', () => {
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});

describe('gameboard', () => {
  let board, ship;
  beforeEach(() => {
    board = new gameBoard();
    ship = new Ship(2);
  });

  test('places ship', () => {
    board.placeShip(ship, [
      [0, 0],
      [0, 1],
    ]);
    expect(board.ships.length).toBe(1);
  });

  test('receive attack', () => {
    board.placeShip(ship, [
      [0, 0],
      [0, 1],
    ]);
    expect(board.receiveAttack(0, 0)).toBe('hit');
    expect(ship.hit).toBe(1);
  });
});
