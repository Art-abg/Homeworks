class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    if (
      this.words.length !== 0 &&
      this.words[this.words.length - 1].slice(-1) !== word[0]
    ) {
      this.game_over = true;
      return "game over";
    } else if (this.words.includes(word)) {
      this.game_over = true;
      return "game over";
    } else {
      this.words.push(word);
      return this.words;
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

let myShiritori = new Shiritori();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"
console.log(myShiritori.words);
console.log(myShiritori.restart()); // "game restarted"
console.log(myShiritori.words);
console.log(myShiritori.play("hostess"));
console.log(myShiritori.play("stash"));
console.log(myShiritori.play("hostess")); //
