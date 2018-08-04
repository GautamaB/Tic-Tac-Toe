function startGame() {
  document.turn = "X";
}

function move(cell) {
  cell.innerHTML = document.turn;
  turnDirection();
}

function turnDirection() {
  if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }
}
startGame();
