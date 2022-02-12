  var rock, paper, scissor,player,computer;
  var rockImg, paperImg, scissorImg;
  var number = 0;
  var num2 = -1;

  function preload(){
    rockImg=loadImage("rock.png");
    paperImg=loadImage("paper.png");
    scissorImg=loadImage("scissor.png");
  }

  function setup(){

    createCanvas(500,490);

    rock= createSprite(110,100,70,70);
    rock.addImage(rockImg);
    rock.scale=0.5;

    paper= createSprite(280,100,70,70);
    paper.addImage(paperImg);
    paper.scale=0.3;

    scissor= createSprite(410,100,70,70);
    scissor.addImage(scissorImg);
    scissor.scale=0.2;

    computer = createSprite(140,350,150,150);
    computer.visible=false;

    player = createSprite(380,350,150,150);
    player.visible=false;
  }

  function draw() {
    background("indigo");
    drawSprites();
    fill("white");
    textSize(20);
    text("Click picture to choose character",100,220);
    
  if(touches.length>0 || mousePressedOver(rock) || mousePressedOver(paper) || mousePressedOver(scissor))
  {
    if(mousePressedOver(rock)){
      player.visible=true;
      player.addImage(rockImg);
      player.scale=0.5;
      num2=1;
    }
    else if(mousePressedOver(paper)){
        player.visible=true;
        player.addImage(paperImg);
        player.scale=0.3;
        num2=2;
      }
      else if(mousePressedOver(scissor)){
        player.visible=true;
        player.addImage(scissorImg);
        player.scale=0.2;
        num2=3;
      }

        number=Math.round(random(1,3));
        if(number==1)
        {
        computer.visible=true;
        computer.addImage(rockImg);
        computer.scale=0.5;
       }
      else if(number==2)
      {
        computer.visible=true;
        computer.addImage(paperImg);
        computer.scale=0.3;
      }
      else if(number==3){
        computer.visible=true;
        computer.addImage(scissorImg);
        computer.scale=0.2;
      }
      
      }

      if(number===num2){
        text("DRAW",230,450);
      }
      if((number===1 && num2 === 2) || (number===2 && num2===3) || (number===3 && num2===1)){
        text("Player Wins",330,450);
      }
      if((number===1 && num2===3) || (number===2 && num2===1) || (number===3 && num2===2)){
        text("Computer Wins",70,450);
      }
    }
