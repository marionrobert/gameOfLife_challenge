const isAlive = (cell, neighbours) => neighbours === 3 || (Boolean(cell) && neighbours === 2) ? 1 : 0;

const generate = (root) => new Array(root * root).fill(0);

const sum = (...args) => args.reduce((accumulator, current) => accumulator + (current || 0), 0);

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

const regenerate = cells => cells.map(cell => isAlive(cell, 0));

window.game = {
  isAlive,
  generate,
  regenerate,
  countLivingNeigbhours
};
