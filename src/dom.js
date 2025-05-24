export function renderBoard(board, container, isEnemy = false) {
  const boardContainer = document.getElementById(container);

  boardContainer.innerHTML = '';

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      const rowIndex = Number(cell.dataset.row);
      const colIndex = Number(cell.dataset.col);

      /*if there is a ship*/
      if (
        !isEnemy &&
        board.ships.some((ship) =>
          ship.coordinates.some(
            (coordinate) =>
              coordinate[0] == rowIndex && coordinate[1] == colIndex
          )
        )
      ) {
        cell.classList.add('ship');
      }
      /*if ship has been hit*/
      if (
        board.ships.some((ship) =>
          ship.coordinates.some(
            (coordinate) =>
              coordinate[0] == rowIndex && coordinate[1] == colIndex
          )
        ) &&
        board.allAttacks.some(
          (coordinate) => coordinate[0] == rowIndex && coordinate[1] == colIndex
        )
      ) {
        cell.classList.add('hit');
      }

      /*the attack was missed*/
      if (
        board.missedAttacks.some(
          (coordinate) => coordinate[0] == rowIndex && coordinate[1] == colIndex
        )
      ) {
        cell.classList.add('miss');
      }
      boardContainer.appendChild(cell);
    }
  }
}
