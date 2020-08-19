var database;
var form,player,game;
var gameState = 0;
var playerCount;
var allPlayers;
var person1,person2,people;
var person1img,person2img;
var ground;

function preload()
{
  //bg = loadImage("a.jpg");
}

function setup() 
{
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  background("white");

  if(playerCount == 2)
  {
     game.update(1);  
  }

  if(gameState == 1)
  {
     clear();
     game.play();
  }
}


