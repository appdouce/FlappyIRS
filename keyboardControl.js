/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */


document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case " ":
      if (!CONTROLS.spacePressed) {
        GUY.v = -2.4;
      }
      CONTROLS.spacePressed = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case " ":
      CONTROLS.spacePressed = false;
      break;
    default:
      break;
  }
});
