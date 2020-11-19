class Character {
  constructor(name, type, level, stunned) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.stunned = stunned;
  }
  levelUp() {}
  modifyStat(quantity, stat) {}
  getStat() {}
  getStun() {}
  setStunned(value) {}
}

class Hero extends Character {
  constructor() {
    super();
  }
}
class Warrior extends Character {
  constructor() {
    super();
  }
}
class Healer extends Character {
  constructor() {
    super();
  }
}
class Defender extends Character {
  constructor() {
    super();
  }
}
class Wizard extends Character {
  constructor() {
    super();
  }
}
