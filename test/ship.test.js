import { Ship } from '../src/ship.js';
import { GameBoard } from '../src/gameBoard.js';

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
    board = new GameBoard();
    ship = new Ship(2);
  });

  test('place ships', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    expect(board.ships.length).toBe(1);
  });

  test('prevent overlapping', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    expect(board.ships.length).toBe(1);
  });

  test('receives attack', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    board.receiveAttack([0, 0]);
    expect(ship.hits).toBe(1);
  });
  test('misses an attack', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    board.receiveAttack([1, 0]);
    expect(board.missedAttacks.length).toBe(1);
  });
  test('avoid duplicate attacks on ship', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 0]);
    expect(ship.hits).toBe(1);
  });

  test('avoid duplicate attacks on missed spots', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    board.receiveAttack([1, 1]);
    board.receiveAttack([1, 1]);
    expect(board.missedAttacks.length).toBe(1);
  });

  test('checks if all ships have sunk', () => {
    board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 1]);
    expect(board.allShipsSunk()).toBe(true);
  });
});
