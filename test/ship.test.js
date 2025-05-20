import { Ship } from '../src/ship.js';
import { GameBoard } from '../src/gameBoard.js';
import { Player, Human, Computer } from '../src/player.js';

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

describe('player', () => {
  test('to have a board', () => {
    const player = new Player();
    expect(player).toHaveProperty('board');
  });

  test('human attacks computer', () => {
    const human = new Human();
    const computer = new Computer();
    const ship = new Ship(2);
    computer.board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    human.attack(computer, [0, 1]);
    expect(computer.board.ships[0].ship.hits).toBe(1);
  });

  test('computer attacks human', () => {
    const human = new Human();
    const computer = new Computer();
    const ship = new Ship(2);
    human.board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    computer.getRandomTarget = jest.fn().mockReturnValue([0, 1]);
    computer.attack(human);
    expect(human.board.ships[0].ship.hits).toBe(1);
  });

  test('computer misses an attack human', () => {
    const human = new Human();
    const computer = new Computer();
    const ship = new Ship(2);
    human.board.placeShips(ship, [
      [0, 0],
      [0, 1],
    ]);
    computer.attack(human);
    expect(human.board.missedAttacks.length).toBe(1);
  });
});
