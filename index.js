const isAlive = (cell, neighbours) => neighbours === 3 || (Boolean(cell) && neighbours === 2) ? 1 : 0;

const generate = (root) => new Array(root * root).fill(0);

const sum = (...args) => args.reduce((accumulator, current) => accumulator + (current || 0), 0);


// les colonnes de gauche et de droite doivent être des modulus de 0
const leftColunmValues = (index, width, cells) => {
  return index % width ? [cells[index - 1], cells[index - width - 1], cells[index + width - 1]] : [];
};

const rightColumnValues = (index, width, cells) => {
  return ((index + 1) % width) ? [cells[index + 1], cells[index - width + 1], cells[index + width + 1]] : [];
};

const countLivingNeigbhours = (cells, index) => {
  const width = Math.sqrt(cells.length);
  return sum(
    cells[index - width],
    cells[index + width],
    ...leftColunmValues(index, width, cells),
    ...rightColumnValues(index, width, cells)
  )
};

const regenerate = cells =>
  cells.map((cell, index )=> isAlive(cell, countLivingNeigbhours(cells, index)));

const createElementWithClass = (tagElement, className) => {
  const newElement = document.createElement(tagElement);
  newElement.className = className;
  return newElement;
}

const drawGrid = (cells) => {
  const width = Math.sqrt(cells.length);
  const grid = document.getElementById("grid");
  const container = createElementWithClass("div", "container");
  let row;
  cells.forEach((cell, index)=> {
    if (index % width === 0 ) {
      row = createElementWithClass("div", "row");
      container.appendChild(row);
    }
    const newCell = createElementWithClass("div", `cell ${cell === 0 ? "dead" : "live"}`);
    row.appendChild(newCell);
  });
  grid.innerHTML = "";
  grid.appendChild(container);
};

const attachGridEventHandler = () => {
  document.getElementById('grid').addEventListener("click", event => {
    const className = event.target.className;
    event.target.className = className.includes("dead") ? className.replace("dead", "live") : className.replace("live", "dead");
  });
};

const getCellsFromDom = () =>
  Array.from(document.querySelectorAll(".cell")).map(cell => cell.className.includes("dead") ? 0 : 1)
;

let gameLoop;

const start = () => {
  let generation = game.getCellsFromDom();
  gameLoop = setInterval(() => {
    generation = game.regenerate(generation);
    game.drawGrid(generation);
  }, 500);
}

const stop = () => clearInterval(gameLoop);

window.game = {
  isAlive,
  generate,
  regenerate,
  countLivingNeigbhours,
  drawGrid,
  attachGridEventHandler,
  getCellsFromDom,
  start,
  stop
};
