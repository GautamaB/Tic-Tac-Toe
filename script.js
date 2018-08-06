const startGame = () => {
  for (let i = 0; i <= 8; i++) {
    clearCell(i);
  }
  document.turn = "DC";
  document.winner = null;
  setMessage("The game beging, " + document.turn + " started the first.");
};

const setMessage = msg => {
  document.getElementById("gameStatus").innerText = msg;
};

const move = cell => {
  if (document.winner != null) {
    setMessage(document.turn + " has already win!");
  } else if (cell.innerText == "") {
    cell.innerHTML = document.turn;
    turnDirection();
  } else {
    setMessage("Choose another cell !");
  }
};

const CheckforTie = () => {
  for (let i = 1; i < 9; i++) {
    if (getCell(i) == "") return false;
  }
  return true;
};

const turnDirection = () => {
  if (winCombos(document.turn)) {
    setMessage("The player " + document.turn + " has Win!!");
    document.winner = document.turn;
  } else if (CheckforTie()) {
    setMessage("Equality !! Play again.");
  } else if (document.turn == "DC") {
    document.turn = "Marvel";
    setMessage("It's " + document.turn + "'s trun.");
  } else {
    document.turn = "DC";
    setMessage("It's " + document.turn + "'s trun.");
  }
};

const winCombos = move => {
  let result = false;
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
};

const checkRow = (a, b, c, move) => {
  let result = false;
  if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
    result = true;
  }
  return result;
};

const getCell = number => {
  return document.getElementById("s" + number).innerText;
};

const clearCell = number => {
  document.getElementById("s" + number).innerText = "";
};

startGame();
