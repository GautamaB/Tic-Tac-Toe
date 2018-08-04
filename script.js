function startGame() {
  for (var i = 0; i <= 8; i++) {
    clearCell(i);
    document.turn = "X";
    document.winner = null;
    setMessage("The game beging, " + document.turn + " started the first.");
  }
}

function setMessage(msg) {
  document.getElementById("gameStatus").innerText = msg;
}

function move(cell) {
  if (document.winner != null) {
    setMessage(document.turn + " has already win!");
  } else if (cell.innerText == "") {
    cell.innerHTML = document.turn;
    turnDirection();
  } else {
    setMessage("Choose another cell !");
  }
}



function turnDirection() {
  if (winCombos(document.turn)) {
    setMessage("The player " + document.turn + " has Win!!");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s trun.");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s trun.");
  }
}

function winCombos(move) {
  var result = false;
  if (
    checkRow(0, 1, 2, move) ||
    checkRow(3, 4, 5, move) ||
    checkRow(6, 7, 8, move) ||
    checkRow(0, 3, 6, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(0, 4, 8, move) ||
    checkRow(2, 4, 6, move)
  ) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
    result = true;
  }
  return result;
}

function getCell(number) {
  return document.getElementById("s" + number).innerText;
}

function clearCell(number) {
  return (document.getElementById("s" + number).innerText = "");
}

startGame();
