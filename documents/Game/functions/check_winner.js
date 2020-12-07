function checkWinner(t){
  if (parseInt(t.keys) >= 3){
    return true;
  }
  else {return false}
}

var text = '{ "teams" : [' +
'{ "attack":"30" , "block":"30" , "stun":"25" , "xp":"10" , "hp":"100" , "heal":"10" , "position_x":"10" , "position_y":"10" , "base_x":"1" , "base_y":"1", "keys":"1" },' +
'{ "attack":"30" , "block":"30" , "stun":"25" , "xp":"10" , "hp":"100" , "heal":"10" , "position_x":"10" , "position_y":"10" , "base_x":"20" , "base_y":"20" , "keys":"3" }]}';

var obj = JSON.parse(text);

console.log(checkWinner(obj.teams[0]));
console.log(checkWinner(obj.teams[1]));