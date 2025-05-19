import { Ship } from './ship';
export class gameBoard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(ship, coordinates) {
    this.ships.push({ ship, coordinates, hits: [] });
  }

  receiveAttack(x, y) {}
}
