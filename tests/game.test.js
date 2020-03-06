import Game from "../src/game";

describe("Game Rules", () => {
  it("when game starts user has 10 remaining points", () => {
    const game = new Game();
    const points = game.remainingPoints();
    const expected = 10;
    expect(points).toEqual(expected);
  });

  it("when game starts displays a _ for each letter in the selected word", () => {
    const game = new Game("World");
    const currentWord = game.currentWord();

    const expected = "_ _ _ _";

    expect(currentWord).toEqual(expected);
  });
});
