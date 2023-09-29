// Descriptor task 1

const obj = {
  _name: [],
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value.split(", ").map((word) => [word, word.length]);
  }
};

obj.name = "Hamlet, Artavazd";
console.log(obj.name);
