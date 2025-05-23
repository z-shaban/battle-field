export class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
    this.allAttacks = [];
  }

  placeShips(ship, coordinates) {
    const alreadyPlaced = this.ships.some(
      (ship) => ship.coordinates.toString() == coordinates.toString()
    );

    if (!alreadyPlaced) {
      this.ships.push({ ship: ship, coordinates: coordinates });
    }
  }

  receiveAttack(target) {
    if (
      this.allAttacks.some(
        (attack) => attack[0] == target[0] && attack[1] === target[1]
      )
    ) {
      return;
    }
    const result = this.ships.find((ship) =>
      ship.coordinates.some(
        (coordinate) =>
          coordinate[0] === target[0] && coordinate[1] === target[1]
      )
    );

    if (result) {
      result.ship.hit();
    } else {
      this.missedAttacks.push(target);
    }
    this.allAttacks.push(target);
  }

  allShipsSunk() {
    return this.ships.every((shipObj) => shipObj.ship.isSunk());
  }
}
