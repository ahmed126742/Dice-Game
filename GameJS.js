var flag = 0 ;
//document.getElementById("right-side").style.opacity = 1;

 var new_game = document.getElementById("btn-1");
 new_game.onclick = startGame;
function startGame()
{
    document.getElementById("right-side").style.opacity = 1;
    document.getElementById("left-side").style.opacity = 0.3;
    player1.current_score = 0 ;
    player1.total_score = 0;
    player2.current_score = 0 ;
    player2.total_score = 0;
    document.getElementById("Player1").innerText = "Player1";
    document.getElementById("Player2").innerText = "Player2";
     document.getElementById("total-1").innerText = 0;
     document.getElementById("current-1").innerText = 0;
     document.getElementById("total-2").innerText = 0;
     document.getElementById("current-2").innerText = 0;
     flag=0;
     picture.src = "";
        picture.alt = "";
     console.log("new game button is working well");

}

var player = {
    current_score : 0,
    total_score : 0
    
}

var PlayerPrototype = {
    isWinner:function(){
        return this.total_score >= 20;
    }
}


// var player1 = Object.create(PlayerPrototype,{
//     current_score:{
//         value:0
//     },
//     total_score:{
//         value:0
//     }
// });
//  console.log(player1);


var player1= Object.create(player);
console.log(player1);
var player2 = Object.create(player);

var roll_Dice = document.getElementById("btn-2");
 roll_Dice.onclick = rollDice;

 var picture = document.createElement("img");
    picture.width = 100;
    var parentDiv  = document.getElementById('Dice');
var high_score = 50;
function rollDice()
{
    if(player1.total_score >= 50)
    {
        document.getElementById("Player1").innerText = "You are Winner!";
        holdScore();
        document.getElementById("right-side").style.opacity= 1;
            document.getElementById("left-side").style.opacity=0.3;
    }
    else if(player2.total_score >= 50)
    {
        document.getElementById("Player2").innerText = "You are Winner!";
        holdScore();
        document.getElementById("right-side").style.opacity= 0.3;
            document.getElementById("left-side").style.opacity=1;
    }
    else{
    var rand = Math.random();
    rand = (Math.floor(rand*6))+1;
    
    parentDiv.appendChild(picture);
    if(rand)
    {
        picture.src = "Dice"+rand+'.png';
        picture.alt = "Dice"+rand;
    }
    if(flag == 0)
    {
        if(rand != 1)
        {
            document.getElementById("right-side").style.opacity= 1;
            document.getElementById("left-side").style.opacity=0.3;
            player1.current_score += rand;
            
        }
        else 
        {
            document.getElementById("right-side").style.opacity= 0.3;
            document.getElementById("left-side").style.opacity= 1;
            flag = 1;
            player1.current_score = 0;
            
        }
        document.getElementById("current-1").innerText =   player1.current_score;
    }
    else 
    {
        if(rand != 1)
        {
            player2.current_score += rand;
            document.getElementById("left-side").style.opacity=1;
            document.getElementById("right-side").style.opacity=0.3;
        }
        else 
        {
            document.getElementById("right-side").style.opacity=1;
            flag = 0;
            player2.current_score = 0;
            document.getElementById("left-side").style.opacity=0.3;
           
        }
        document.getElementById("current-2").innerText =   player2.current_score;
    }
}
 
}
// In Case Player Click on hold Button
var Hold = document.getElementById("btn-3");
 Hold.onclick = holdScore;
 function holdScore()
 {
    if(flag == 0)
    {
        document.getElementById("left-side").style.opacity=1;
        document.getElementById("right-side").style.opacity=0.3;
        player1.total_score += player1.current_score;
        document.getElementById("total-1").innerText =  player1.total_score;
        document.getElementById("current-1").innerText =  0;
        player1.current_score = 0;
        if(player1.total_score >= 50)
        {
            flag = 1 ;
        }
        else{
        flag = 0 ;
        }
    }
    else 
    {
        document.getElementById("left-side").style.opacity=0.3;
        document.getElementById("right-side").style.opacity=1;
        player2.total_score += player2.current_score;
        document.getElementById("total-2").innerText =  player2.total_score;
        document.getElementById("current-2").innerText =  0;
        player2.current_score = 0 ;
        if(player1.total_score >= 50)
        {
        flag = 0 ;
        }
        else{
            flag = 1; 
        }
       
    }
 
 }
