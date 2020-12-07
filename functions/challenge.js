function attackDamage(t1, t2){
  if (isStunned(parseInt(t2.stun))){
    return 0;
  }
  else {
    var dif = parseInt(t1.attack) - parseInt(t2.block);
    var delta = Math.floor(dif/10) / 10 + 1;
  }
  return Math.floor(20 * delta);
}

function isStunned(stun){
  var value = Math.floor((Math.random() * 100) + 1);
  if (value < stun){
    return true;
  }
  return false;
}

function challenge(t){
  var mob = {attack:40, block:25, hp:225, stun:10};
  // console.log(mob.hp);
  var turn = 1;
  while (parseInt(t.hp) > 0 && mob.hp > 0) {
    if (turn == 1){
      var damage = attackDamage(t, mob);
      mob.hp -= damage;
      turn = 2;
    }
    else{
      var damage = attackDamage(mob, t);
      t.hp = parseInt(t.hp) - damage;
      t.hp = parseInt(t.hp) + parseInt(t.heal);
      turn = 1;
      }
  }
  // if turn == 1 -> winner is T2
  if (turn == 1){t.position_x = parseInt(t.base_x);t.position_y = parseInt(t.base_y);console.log('Gano el monstro');}
  else {t.xp = parseInt(t.xp) + 5; t.position_x = parseInt(t.base_x);t.position_y = parseInt(t.base_y);console.log('Se venció al monstro');}

  console.log(mob);
  return t;
}

var text = '{ "teams" : [' +
'{ "attack":"30" , "block":"30" , "stun":"25" , "xp":"10" , "hp":"100" , "heal":"10" , "position_x":"10" , "position_y":"10" , "base_x":"1" , "base_y":"1" },' +
'{ "id": 1, "keys": 0, "base_x": 0, "position_x": 0, "base_y": 0, "position_y": 0, "race": "Human", "xp": 0, "hp": 100, "heal": 10, "block": 30, "attack": 30, "stun": 25, "createdAt": "2020-11-19T21:52:27.510Z", "updatedAt": "2020-11-19T21:52:27.510Z", "GameId": 1, "UserId": "1" }]}';

var obj = JSON.parse(text);

obj.teams[1] = challenge(obj.teams[1]);

console.log(obj.teams[1]);