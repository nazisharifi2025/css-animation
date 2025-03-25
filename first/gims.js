add();
const startBtn =document.getElementById("startGames");
let computerChoice="ROCK";
const ROCK = "ROCK";
const SCISSORS="SCESSORS";
const PAPER="PAPER";
let winner = "";
let determineWinner = function(cChoice,pChoice){
    if(
    (pChoice === ROCK && cChoice === SCISSORS)||
    (pChoice === PAPER &&  cChoice===ROCK)||
    (pChoice=== SCISSORS && cChoice===PAPER)
     ) {
        winner = "PLAYER WINS";
    }
    else if(cChoice === pChoice){
        winner = "Draw"
    }
    else{
        winner = "Cumputer wins"
    }
    return winner;
}
function start(){
    // console.log("Gem is started....");
   let playerChoice= prompt(`${ROCK},${PAPER} or ${SCISSORS}`).toUpperCase();
   let  randomNumber=Math.random();
   if(randomNumber<0.33){
computerChoice= ROCK;
   }
   else if(randomNumber<0.66){
    computerChoice=PAPER;
   }
   else{
    computerChoice=SCISSORS;
   }
  let result= determineWinner(computerChoice , playerChoice);
  console.log(result);
}

startBtn.addEventListener("click",start);
// EXPRESSION
let a = 90+90;
let b =function(){
    console.log(90+90);
}
function add(){
    console.log(2+2); 
}
