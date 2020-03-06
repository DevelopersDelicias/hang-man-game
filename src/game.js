class Game {
  constructor(word) {
    this.word = word;
  }
  remainingPoints() {
    return 10;
  }

  currentWord() {
    return this.word
      .split("")
      .map(letter => "_")
      .join(" ");
  }
}

export default Game;
