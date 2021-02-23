class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.xPos=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      xPos:this.xPos
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  spawnObstacles(){
    if(frameCount%70===0){
      var obstacle1 = createSprite(0,-displayHeight*4,20,20)
      obstacle1.x=Math.round(random(175, 1200))
      obstacle1.velocityY = 10;
      obstacle1.lifetime = 1200;
      obstacle1.addImage("obstacle", obstacleImage)
      obstacle1.scale = 0.1;  
      obstacle1.setCollider("circle",0,0,obstacle1.radius/2);
      obstacleGroup.add(obstacle1)
    }
  }
  spawnCoins(){
    if(frameCount%90===0){
      var coin = createSprite(0,-displayHeight*4,20,20)
      coin.x = Math.round(random(175,1200))
      coin.velocityY = 10;
      coin.lifetime = 1200;
      coin.addImage("coin", coinImage)
      coin.scale = 0.08;
      coinsGroup.add(coin)
    }
  }
}
