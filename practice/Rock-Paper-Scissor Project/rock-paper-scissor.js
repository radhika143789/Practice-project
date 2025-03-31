 // As we wanna keep score from last time we are creating it outside
 const Score =JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loses:0,
    ties :0
};
//Default value for score if removed from storage to not get null or error
// score===null is same as !score  
// adding default as OR
updateScore(); 



function pickComputerMove()
{
     
    const randomNumber=Math.random(); 
    if(randomNumber>=0 && randomNumber<(1/3)){
        computerMove='Rock';
        
    }
    else if(randomNumber>=(1/3)&&randomNumber<(2/3)){
        computerMove='Paper';
    }
    else if(randomNumber>=2/3&&randomNumber<1){
        computerMove='Scissor';

    } 
    return computerMove;
}
let isAutoPlay = false;
let intervalID;
function autoplay(){ 
 if(!isAutoPlay)
   {  intervalID= setInterval(function(){
        const playerMove = pickComputerMove();
    playGame(playerMove);
    },1000);
    isAutoPlay=true;

    }else{
     clearInterval(intervalID);
     isAutoPlay=false;
    }
}
function playGame(playerMove){
computerMove = pickComputerMove();
result='';
if(playerMove==='Scissor')
{
    if(computerMove ==='Rock'){
     result='You Lose';
}
    else if(computerMove==='Paper'){
     result='You Win';
}
    else {
     result ='Tie';
}

}
else if (playerMove==='Rock'){
    
if(computerMove ==='Rock'){
result='Tie';
}
else if(computerMove==='Paper'){
result='You Lose';
}
else {
result ='You Win';
}

}
else if(playerMove==='Paper'){
    
if(computerMove ==='Rock'){
result='You Win';
}
else if(computerMove==='Paper'){
result='Tie';
}
else {
result ='You Lose';
}

}


if(result === 'You Win'){
Score.wins +=1;
}
else if(result === 'You Lose'){
Score.loses +=1;
}
else{
Score.ties +=1;
} 
localStorage.setItem('score',JSON.stringify(Score)); 
updateScore();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=`You <img src="rock-paper-scissors-Images/${playerMove}.png" class="move-icon"> Computer <img src="rock-paper-scissors-Images/${computerMove}.png" class="move-icon">`;


} 
function updateScore(){
document.querySelector('.js-score').innerHTML=`Wins : ${Score.wins} Lost: ${Score.loses} Tie : ${Score.ties}`;

}
