// Beginning State of Game
let icon = "X";
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let numOfMoves = 0;

loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    showAlert(`${icon} starts the game`);
  });

  document.querySelector("#restart").addEventListener("click", resetGame);

  const spaces = document.querySelectorAll(".board-space");

  for (const space of spaces) {
    space.addEventListener("click", addGameIcon);
  }
}

// Updating UI
function addGameIcon() {
  let row = undefined,
    col = undefined;

  [row, col] = this.classList[1].split("-");

  if (!gameBoard[row][col]) {
    gameBoard[row][col] = icon;
    numOfMoves++;

    const div = document.createElement("div");
    const i = document.createElement("i");

    if (icon === "X") {
      i.className = "fas fa-times fa-10x";
    } else {
      i.className = "far fa-circle fa-8x";
    }

    div.appendChild(i);

    this.appendChild(div);

    if (didWin(row, col)) {
      document.querySelector("#board").style.pointerEvents = "none";
      showAlert(`${icon} WON!!!`);
    } else {
      icon = icon === "X" ? "O" : "X";
      showAlert(`It is ${icon}'s turn`);
      if (numOfMoves == 9) {
        showAlert(`It is a cats game.`);
      }
    }
  }
}

function resetGame() {
  const spaces = document.querySelectorAll(".board-space");

  for (const space of spaces) {
    while (space.firstChild) {
      space.removeChild(space.firstChild);
    }
  }

  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  icon = "X";
  numOfMoves = 0;

  document.querySelector("#board").style.pointerEvents = "auto";
  showAlert(`${icon} starts the game`);
}

function showAlert(msg) {
  const alert = document.querySelector("#alert");

  while (alert.firstChild) {
    alert.removeChild(alert.firstChild);
  }

  alert.appendChild(document.createTextNode(msg));
}

// Game Logic
function didWin(row, col) {
  if (row == 1 && col == 1) {
    return checkRowCol(row, col) || checkDiag(row, col) || checkDiag(2, 0);
  } else if (row != 1 && col != 1) {
    return checkRowCol(row, col) || checkDiag(row, col);
  } else {
    return checkRowCol(row, col);
  }
}

function checkRowCol(row, col) {
  let rowBool = true,
    colBool = true;
  for (let i = 0; i < 3; i++) {
    if (gameBoard[row][i] != icon) {
      rowBool = false;
    }
    if (gameBoard[i][col] != icon) {
      colBool = false;
    }
  }
  return rowBool || colBool;
}

function checkDiag(row, col) {
  if (row === col) {
    return (
      gameBoard[0][0] === icon &&
      gameBoard[1][1] === icon &&
      gameBoard[2][2] === icon
    );
  } else {
    return (
      gameBoard[0][2] === icon &&
      gameBoard[1][1] === icon &&
      gameBoard[2][0] === icon
    );
  }
}
