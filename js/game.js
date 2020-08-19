class Game
{
   constructor()
   {
      
   }

   getState()
   {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function(data)
      {
        gameState = data.val();
      });
   }

   update(state)
   {
      database.ref('/').update
      ({
         gameState: state
      })
   }

   async start()
   {
      if(gameState == 0)
      {
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value"); 
         if(playerCountRef.exists())
         {
            playerCount = playerCountRef.val(); 
            player.getCount();
         }

         form = new Form();
         form.display();
      }
      person1 = createSprite(400,300,20,20);
      //car1.addImage(car1img);
      person2 = createSprite(400,500,20,20);
      //car2.addImage(car2img);
      people = [person1,person2];
   }

   play()
   {
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      var index = 0;
      var x = 130;
      var y;
      for(var plr in allPlayers)
      {
        index = index + 1;
        x = displayWidth - allPlayers[plr].distance;
        y = y+200;
        people[index-1].x = x;
        people[index-1].y = y;
        if(index == player.index)
        {
          camera.position.x = people[index-1].x;
          camera.position.y = displayHeight/2;
        }
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null)
    {
      player.distance +=15;
      player.update();
    }
    drawSprites();
  }

  /*end()
  {
     console.log("Game Has Ended");
     game.update(2);   
  }*/
}