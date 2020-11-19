class Team {
  constructor(userId, race, extraCharacter, position) {
    this.teamComposition;
    this.keys = 0;
    this.base;
    this.position;
    this.team_xp;
    this.race;
    this.userId;
    this.actions = [];
  }
  attack(team) {}
  receiveAttack(damage) {}
  applyBuff(quantity, attribute) {}
  getStat(stat) {}
  receiveHeal(hp) {}
  stun(team) {}
  disableCharacter(character) {}
  receiveExperience() {}
  levelUp(character) {}
  getKeys() {}
  getPosition() {}
  getUserId() {}
  setActions(actions) {}
}
