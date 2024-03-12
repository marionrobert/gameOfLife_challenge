const { TestEnvironment } = require("jest-environment-jsdom");

require("../index");
const { isAlive, generate, regenerate, countLivingNeigbhours } = window.game;

describe("GAME OF LIFE", () => {
  describe("-- isAlive algorithm --", () => {
    test("dead cell with no living neighbours stays dead --> return 0", () => {
      expect(isAlive(0, 0)).toEqual(0);
    });
    test("dead cell with 3 living  neighbours should become alive --> return 1", () => {
      expect(isAlive(0, 3)).toEqual(1);
    });
    test("live cell with no living neigbours should be dead --> return 0  ", () => {
      expect(isAlive(1, 0)).toEqual(0);
    });
    test("live cell with 2 living neighbours stays alive --> return 1", () => {
      expect(isAlive(1, 2)).toEqual(1);
    });
    // test("dead cell with 2 living neighbours stays alive --> return 0", () => {
    //   expect(isAlive(0, 2)).toEqual(0);
    // })
  });

  describe("-- generate function --", () => {
    test("should create an array of x * x", () => {
      expect(generate(1)).toEqual([0]);
      expect(generate(2)).toEqual([0, 0, 0, 0]);
    })
  });

  describe("-- count Living neighbours -- ", () => {
    test("should count 0 for array of one", () => {
      expect(countLivingNeigbhours([1], 0)).toEqual(0);
    });
    test("should count 2 neighbours", () => {
      expect(countLivingNeigbhours([1, 1, 1, 0], 0)).toEqual(2);
    })
  })

  describe("-- regenerate function --", () => {
    test("should not update dead cells", () => {
      const cells = generate(1);
      expect(regenerate(cells)).toEqual(cells);
    });
    test("should return all dead cells", () => {
      const initialCells = generate(2);
      const cells = generate(2);
      cells[0] = 1;
      expect(regenerate(cells)).toEqual(initialCells);
    });
    test("should return all live cells", () => {
      const cells = [1, 1, 1, 0];
      expect(regenerate(cells)).toEqual([1, 1, 1, 1]);
    })
  })
});
