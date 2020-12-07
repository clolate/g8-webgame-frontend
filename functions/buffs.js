function baseBuff(t){
  if (parseInt(t.position_x) == parseInt(t.base_x) && parseInt(t.position_y) == parseInt(t.base_y)){
    t.hp = parseInt(t.hp) + 40;
  }
  return t;
}

function attackBuff(t){
  t.attack = parseInt(t.attack) + Math.floor((Math.random() * 3) + 1);
  return t;
}

function blockBuff(t){
  t.block = parseInt(t.block) + Math.floor((Math.random() * 3) + 1);
  return t;
}

function hpBuff(t){
  t.hp = parseInt(t.hp) + Math.floor((Math.random() * 3) + 1);
  return t;
}

function xpBuff(t){
  t.xp = parseInt(t.xp) + 1;
  return t;
}

function healBuff(t){
  t.heal = parseInt(t.heal) + Math.floor((Math.random() * 5) + 1);
  return t;
}

function keyBuff(t){
  t.key = parseInt(t.key) + 1;
  return t;
}