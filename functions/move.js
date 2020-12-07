function move(t, x, y){
if (0 <= parseInt(t.position_x) + x < 7 && 0 <= parseInt(t.position_y) + y < 7){
  position_x = parseInt(t.position_x) + x;
  position_y = parseInt(t.position_y) + y;
  return t;
  }
  return -1;
}