// function isAlive(cell, neighbours) {
//   if ((neighbours === 3) || (Boolean(cell) && neighbours === 2)){
//     return 1;
//   }
//   return 0;
// }

const isAlive = (cell, neighbours) => neighbours === 3 || (Boolean(cell) && neighbours === 2) ? 1 : 0;

const generate = (root) => new Array(root * root).fill(0);

const sum = (...args) => args.reduce((accumulator, current) => accumulator + (current || 0), 0);

const countLivingNeigbhours = (cells, index) => {
  const width = Math.sqrt(cells.length);
  return sum(cells[index + 1], cells[index + width], cells[index + width + 1])
};

const regenerate = cells => cells.map(cell => isAlive(cell, 0));

window.game = {
  isAlive,
  generate,
  regenerate,
  countLivingNeigbhours
};
