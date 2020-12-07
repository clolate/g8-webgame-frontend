const actions = { atacar: "atacar", defender: "defender", sanar: "sanar" };
var currentActions = [];

function saveActions() {
  if (typeof Storage !== "undefined") {
    dict = {
      action1: currentActions[0],
      action2: currentActions[1],
      action3: currentActions[2],
    };
    localStorage.setItem("action", JSON.stringify(dict));
    currentActions = [];
  }
}

function showActions() {
  // funcionalidad 6
}

function actionOnClick(id) {
  if (currentActions.length >= 3) {
    return;
  }
  switch (id) {
    case actions.atacar:
      currentActions.push(actions.atacar);
      break;
    case actions.defender:
      currentActions.push(actions.defender);
      break;
    case actions.sanar:
      currentActions.push(actions.sanar);
      break;
    default:
      break;
  }
}

function undoAction() {
  currentActions.pop();
}

function loadJSON(json) {
  let player1 = {
    nombre: json.name,
    noKeys: json.objectsCollected.keys,
    race: json.race,

    exp: json.currentStats.exp,
    hp: json.currentStats.hp,
    ataque: json.currentStats.ataque,
    defensa: json.currentStats.defensa,
    stun: json.currentStats.stun,
    heal: json.currentStats.curacion,
  };
  localStorage.setItem("player1", JSON.stringify(player1));
}

function get_localstorage2() {
  var players = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    players.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return players;
}

function GetplayerStats() {
  const playeres = get_localstorage2();

  for (let player in playeres) {
    if ("nombre" in playeres[player]) {
      return playeres[player];
    }
  }
  return false;
}

function ShowStats() {
  let player = GetplayerStats();
  document.getElementById("stats").innerHTML =
    ' <h3 class="rules-title">Stats</h3>';
  for (stat in player) {
    document.getElementById("stats").innerHTML +=
      "<li><b>" + stat + ": </b>" + player[stat] + "</li>";
  }
  document.getElementById("stats").innerHTML +=
    '<input  class="button2" type="button" value="Actualizar" onclick="Actions:UpdateStats()">';
  document.getElementById("stats").innerHTML +=
    '<input  class="button2" type="button" value="Close Stats" onclick="Actions:CloseStats()">';
}

function GetAction() {
  const action = get_localstorage2();

  for (let i in action) {
    if ("action1" in action[i]) {
      return action[i];
    }
  }
  return false;
}

function UpdateStats() {
  let action = GetAction();
  let player = GetplayerStats();
  document.getElementById("stats").innerHTML =
    ' <h3 class="rules-title">Stats</h3>';
  for (a in action) {
    if (action[a] == "atacar") {
      player["attack"] += 30;
    }
    if (action[a] == "defender") {
      player["block"] += 30;
    }
    if (action[a] == "sanar") {
      player["hp"] += 10;
    }
  }
  for (stat in player) {
    document.getElementById("stats").innerHTML +=
      "<li><b>" + stat + ": </b>" + player[stat] + "</li>";
  }
  document.getElementById("stats").innerHTML +=
    '<input  class="button2" type="button" value="Actualizar" onclick="Actions:UpdateStats()">';
  document.getElementById("stats").innerHTML +=
    '<input  class="button2" type="button" value="Close Stats" onclick="Actions:CloseStats()">';
  SaveStats(player);
}

function SaveStats(player) {
  localStorage.setItem("player1", JSON.stringify(player));
  let action = {
    action1: "",
    action2: "",
    action3: "",
  };
  localStorage.setItem("action", JSON.stringify(action));
}

function CloseStats() {
  document.getElementById("stats").innerHTML =
    ' <h3 class="rules-title">Stats</h3>';
  document.getElementById("stats").innerHTML +=
    '<input  class="button2" type="button" value="Ver Stats" onclick="Actions:ShowStats()">';
}
