
//updates Guy's vertical position
function HandleGuyAnimation() {
  GUY.v += GUY.g;
  GUY.y += GUY.v;
}

//check if Guy collided with the ceiling, floor, or any IRS agents
function CollisionCheck() {
  if (GUY.y <= 0) {
    GUY.v = 0.5;
  }
  if (GUY.y + GUY.h >= GAME.canvas.height) {
    GUY.y = GAME.canvas.height -GUY.h;
    GAME.started = false;
  }
}

//render any image
function RenderImage(context, obj) {
  if (obj.initialized) {
      context.drawImage(obj.image, obj.x, obj.y, obj.w, obj.h);
  }
}

function HandleAgentAnimations() {
  //goes through array of irs agents and updates positions
  for (i = 0; i < IRS_AGENTS.arr.length; i++) {
    IRS_AGENTS.arr[i].x -= IRS_AGENTS.v;
  }
  if (IRS_AGENTS.arr[0].x + IRS_AGENTS.w <= 0) { //if agent went out of bounds, make a new one
    IRS_AGENTS.arr.push(new IRSAgents(300-  IRS_AGENTS.w));
    IRS_AGENTS.arr.shift();
  }

}

function RenderAgents(context) {
  //goes through array of irs agents and renders them
  for (i = 0; i < IRS_AGENTS.arr.length; i++) {
    var agent = IRS_AGENTS.arr[i];
    var y1 = GAME.canvas.height - agent.h;
    var h2 = GAME.canvas.height - agent.h - IRS_AGENTS.gap;
    context.drawImage(IRS_AGENTS.image, agent.x, y1 , IRS_AGENTS.w, agent.h);
    context.save();
    context.scale(1, -1); //flips context upside-down?
    context.drawImage(IRS_AGENTS.image, agent.x, 0, IRS_AGENTS.w, -h2);
    context.restore();
  }
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  var timeToPipe = 0;

  if (GAME.started) {
    GUY.initialized = true;

    HandleAgentAnimations();
    HandleGuyAnimation();
    CollisionCheck();

    context.clearRect(0, 0, 600, 300);

    RenderImage(context, BACKGROUND);
    RenderImage(context, GUY);
    RenderAgents(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over", 220, 150);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
