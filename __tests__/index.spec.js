const { TestEnvironment } = require("jest-environment-jsdom");

require("../index");
const { isAlive, generate, regenerate, countLivingNeigbhours, drawGrid, attachGridEventHandler } = window.game;

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
    });
    test("should count 2 neighbours (bis)", () => {
      expect(countLivingNeigbhours([1, 1, 1, 0], 1)).toEqual(2);
    });
    test("should count 2 neighbours (ter)", () => {
      expect(countLivingNeigbhours([1, 1, 1, 0], 2)).toEqual(2);
    });
    test("should count 3 neighbours", () => {
      expect(countLivingNeigbhours([1, 1, 1, 0], 3)).toEqual(3);
    });
    test("should count 3 neighbours", () => {
      expect(countLivingNeigbhours([1, 1, 1, 0, 0, 0, 0, 0, 0], 4)).toEqual(3);
    });

  });

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
  });

  describe("-- browser grid --", () => {
    // test("should display 1 dead cell", () => {
    //   document.body.innerHTML = '<div id="grid"></div>';
    //   drawGrid([0]);
    //   expect(document.querySelectorAll(".container").length).toEqual(1);
    //   expect(document.querySelectorAll(".cell").length).toEqual(1);
    //   expect(document.querySelectorAll(".dead").length).toEqual(1);
    // });
    // test("should display 1 alive cell", () => {
    //   document.body.innerHTML = '<div id="grid"></div>';
    //   drawGrid([1]);
    //   expect(document.querySelectorAll(".container").length).toEqual(1);
    //   expect(document.querySelectorAll(".cell").length).toEqual(1);
    //   expect(document.querySelectorAll(".live").length).toEqual(1);
    // });
    test("should display living and dead cells", () => {
      document.body.innerHTML = '<div id="grid"></div>';
      drawGrid([0, 0, 1, 1]);
      expect(document.querySelectorAll(".row").length).toEqual(2);
      expect(document.querySelectorAll(".cell").length).toEqual(4);
      expect(document.querySelectorAll(".live").length).toEqual(2);
      expect(document.querySelectorAll(".dead").length).toEqual(2);
      drawGrid([1, 1, 0, 0]);
      expect(document.querySelectorAll(".row").length).toEqual(2);
      expect(document.querySelectorAll(".cell").length).toEqual(4);
      expect(document.querySelectorAll(".live").length).toEqual(2);
      expect(document.querySelectorAll(".dead").length).toEqual(2);
    })
  });

  describe("-- event handler for grid --", () => {
    test("click on cell should toggle live/dead", () => {
      document.body.innerHTML =  '<div id="grid"></div>';
      drawGrid([0]);
      attachGridEventHandler();
      expect(document.querySelectorAll(".live").length).toEqual(0);
      expect(document.querySelectorAll(".dead").length).toEqual(1);
      const cell = document.querySelectorAll(".dead")[0];
      cell.click();
      expect(document.querySelectorAll(".live").length).toEqual(1);
      expect(document.querySelectorAll(".dead").length).toEqual(0);
      cell.click();
      expect(document.querySelectorAll(".live").length).toEqual(0);
      expect(document.querySelectorAll(".dead").length).toEqual(1);
    });
  });
});
