
var GAME = {
  canvas : {  //canvas size
    width : 600,
    height : 300
  },
  started : true, //is the game still going?
  level : 1
};

var CONTROLS = {
  spacePressed: false
}

var GUY = {
  initialized : false,  //should Guy be rendered?
  x : 20, //Guy's x coord
  y : 10, //Guy's y coord
  v: 0, //Guy's vertical velocity (+ is down, - is up)
  g: 0.069, //Guy's downward acceleration (constant)
  w: 25,  //Guy's width
  h: 35,  //Guy's height
  image : new Image() //Guy's image variable
};

var BACKGROUND = {
  initialized : true, //should the background be rendered?
  x : 0,  //the background image's coords are at the origin of the canvas
  y : 0,
  w : GAME.canvas.width,  //the background image's size is the same as the canvas
  h : GAME.canvas.height,
  image : new Image() //background image file
};

class IRSAgents {  //new object type called an IRS agent
  constructor(x) {
    this.x = GAME.canvas.width + x;  //initial x coord for IRS agent
    this.h = Math.floor(Math.random()*150)+50; //height of the bottom agent
  }
}

var IRS_AGENTS = {
  gap: 79,//size of vertical gap between agents
  v: 1, //speed at which they move across screen
  image : new Image(),
  w : 75,
  arr: [new IRSAgents(0), new IRSAgents(300), new IRSAgents(600)] //array of pairs of agents

};

//defines image files
IRS_AGENTS.image.src = "IRSAgent.jpg";
GUY.image.src = "guyface.png";
BACKGROUND.image.src = "dtom.png";
