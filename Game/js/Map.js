function tile(clas, src, iscurrent) {
  var div = document.createElement("div");
  var ima = document.createElement("img");
  ima.className = "icono";
  ima.src = src;
  if (iscurrent) {
    div.className = "map-item iscurrent " + clas;
  } else {
    div.className = "map-item " + clas;
  }

  if (src) {
    div.appendChild(ima);
  }
  return div;
}

function tipoTile(tipo, iscurrent) {
  if (tipo == "base") {
    return tile(tipo, "../images/pick-up-byMJ/4-others/5.png",iscurrent);
  }
  if (tipo == "ataque") {
    return tile(tipo, "../images/pick-up-byMJ/3-powers/3.png",iscurrent);
  }
  if (tipo == "defensa") {
    return tile(tipo, "../images/pick-up-byMJ/3-powers/6.png",iscurrent);
  }
  if (tipo == "vida") {
    return tile(tipo, "../images/pick-up-byMJ/3-powers/10.png",iscurrent);
  }
  if (tipo == "exp") {
    return tile(tipo, "../images/pick-up-byMJ/4-others/1.png",iscurrent);
  }
  if (tipo == "curacion") {
    return tile(tipo, "../images/pick-up-byMJ/3-powers/4.png",iscurrent);
  }
  if (tipo == "vacio") {
    return tile(tipo, "",iscurrent);
  }
  if (tipo == "llave") {
    return tile(tipo, "../images/pick-up-byMJ/4-others/6.png",iscurrent);
  }
  if (tipo == "amenaza") {
    return tile(tipo, "../images/pick-up-byMJ/3-powers/2.png",iscurrent);
  }
  if (tipo == "objeto") {
    return tile(tipo, "../images/pick-up-byMJ/4-others/4.png",iscurrent);
  }
  if (tipo == "tesoro") {
    return tile(tipo, "",iscurrent);
  }
  if (tipo == "blocked") {
    return tile(tipo, "",iscurrent);
  }
}
function map(jsonMap, jsonPos) {
  const rows = 7;
  const cols = 7;
  document.getElementById("map").innerHTML = "";
  for (let i = 0; i < rows; i++) {
    var container = document.createElement("div");
    container.className = "map-container";
    for (let j = 0; j < cols; j++) {
      var actualPos = [i, j];
      var infoCasillaij = jsonMap.find(
        (elem) => elem.position.toString() == actualPos.toString()
      );
      if (infoCasillaij) {
        var mapPos = actualPos.toString() == jsonPos.toString();
        var item = tipoTile(infoCasillaij["tipo"], mapPos);
        container.appendChild(item);
      } else {
        var blocked = tipoTile("blocked");
        container.appendChild(blocked);
      }
    }
    document.getElementById("map").appendChild(container);
  }
}
