const { TestEnvironment } = require("jest-environment-jsdom");

require("../index");
const { isAlive } = window.game;

describe("game of life", () => {
  describe("isAlive algorithm", () => {
    test("dead cell with no living neighbours stays dead --> return 0", () => {
      expect(isAlive(0, 0)).toEqual(0);
    });
    test("dead cell with 3 living  neighbours should become alive --> return 1", () => {
      expect(isAlive(0, 3)).toEqual(1);
    });
    test("live cell with no living neigbours should be dead --> return 0  ", () => {
      expect(isAlive(1, 0)).toEqual(0);
    })
    test("live cell with 2 living neighbours stays alive --> return 1", () => {
      expect(isAlive(1, 2)).toEqual(1);
    })
  });
});
