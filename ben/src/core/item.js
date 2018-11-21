class Item {
  // méthode constructor
  constructor(name = 'default', parents = []) {
    this.parents = parents;
    this.name = name;
  }
}

module.exports = Item;
