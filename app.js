let turn = "times";

loadEventListeners();

function loadEventListeners() {
  const spaces = document.querySelectorAll(".board-space");

  for (const space of spaces) {
    space.addEventListener("click", addGameIcon);
  }
}

function addGameIcon() {
  const div = document.createElement("div");
  const i = document.createElement("i");

  if (turn === "times") {
    i.className = "fas fa-times fa-9x";
  } else {
    i.className = "far fa-circle fa-8x";
  }

  div.appendChild(i);

  this.appendChild(div);

  turn = turn === "times" ? "cirlce" : "times";
}
