let turn = "X";
const gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

loadEventListeners();

function loadEventListeners() {
  const spaces = document.querySelectorAll(".board-space");

  for (const space of spaces) {
    space.addEventListener("click", addGameIcon);
  }
}

function addGameIcon() {
  let row = undefined,
    col = undefined;

  [row, col] = this.classList[1].split("-");

  if (!gameBoard[row][col]) {
    gameBoard[row][col] = turn;

    const div = document.createElement("div");
    const i = document.createElement("i");

    if (turn === "X") {
      i.className = "fas fa-times fa-9x";
    } else {
      i.className = "far fa-circle fa-8x";
    }

    div.appendChild(i);

    this.appendChild(div);

    turn = turn === "X" ? "O" : "X";
  }

  console.log(gameBoard);
}
