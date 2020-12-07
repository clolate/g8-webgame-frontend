class Tile {
  constructor(type, owner = null) {
    this.owner = owner;
    this.type = type;
    this.teams = [];
    this.round = 0;
  }
  addTeam(team) {
    this.teams.push(team);
  }

  play() {}
}

class Map {
  constructor(tiles) {
    this.tiles = tiles;
  }
  addTeamToTile(team) {}
}
