// function isAlive(cell, neighbours) {
//   if ((neighbours === 3) || (Boolean(cell) && neighbours === 2)){
//     return 1;
//   }
//   return 0;
// }

const isAlive = (cell, neighbours) => neighbours === 3 || (Boolean(cell) && neighbours === 2) ? 1 : 0;

const generate = (root) => new Array(root * root).fill(0);

window.game = {
  isAlive,
  generate
};
