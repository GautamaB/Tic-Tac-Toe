function startGame() {
  document.turn = "X";
  setMessage("The game beging, " + document.turn + " started the first.");
}

function setMessage(msg) {
  document.getElementById("gameStatus").innerText = msg;
}

function move(cell) {
  if (cell.innerText == "") {
    cell.innerHTML = document.turn;
    turnDirection();
  } else {
    setMessage("Choose another cell !");
  }
}

function turnDirection() {
  if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }
}

startGame();
