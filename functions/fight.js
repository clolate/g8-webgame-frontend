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


function fight(t1, t2){
  var turn = 1;
  while (parseInt(t1.hp) > 0 && parseInt(t2.hp) > 0) {
    if (turn == 1){
      var damage = attackDamage(t1, t2);
      t2.hp = parseInt(t2.hp) - damage;
      t2.hp = parseInt(t2.hp) + parseInt(t2.heal);
      turn = 2;
    }
    else{
      var damage = attackDamage(t2, t1);
      t1.hp = parseInt(t1.hp) - damage;
      t1.hp = parseInt(t1.hp) + parseInt(t1.heal);
      turn = 1;
      }
  }
  // if turn == 1 -> winner is T2
  if (turn == 1){t2.xp = parseInt(t2.xp) + 5; t1.position_x = parseInt(t1.base_x);t1.position_y = parseInt(t1.base_y);console.log('Gano el T2');}
  else {t1.xp = parseInt(t1.xp) + 5; t2.position_x = parseInt(t2.base_x);t2.position_y = parseInt(t2.base_y);console.log('Gano el T1');}

  console.log(t1);
  return t1, t2;
}

var text = '{ "teams" : [' +
'{ "attack":"30" , "block":"30" , "stun":"25" , "xp":"10" , "hp":"100" , "heal":"10" , "position_x":"10" , "position_y":"10" , "base_x":"1" , "base_y":"1" },' +
'{ "attack":"30" , "block":"30" , "stun":"25" , "xp":"10" , "hp":"100" , "heal":"10" , "position_x":"10" , "position_y":"10" , "base_x":"20" , "base_y":"20" }]}';

var obj = JSON.parse(text);

obj.teams[0], obj.teams[1] = fight(obj.teams[0], obj.teams[1]);

console.log(obj);
