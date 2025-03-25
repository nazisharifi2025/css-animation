const startBtn =document.getElementById("startGames");
let computerChoice="ROCK";
const roke = "ROCK";
const SCISSORS="SCESSORS";
const PAPER="PAPER";

function start(){
    // console.log("Gem is started....");
   let playerChoice= prompt(`${ROCK},${PAPER} OR ${SCISSORS}`);
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
}

startBtn.addEventListener("click",start);
