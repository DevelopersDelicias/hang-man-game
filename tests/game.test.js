import Game from "../src/game";

describe("Game Rules", () => {
  it("when game starts user has 10 remaining points", () => {
    const game = new Game();

    const points = game.remainingPoints();

    const expected = 10;

    expect(points).toEqual(expected);
  });
});
