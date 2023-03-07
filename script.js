let wins = 0;
let loses = 0;

const choices = ["Pierre", "Feuille", "Ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function runGame(userChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(`V: ${userChoice} | A: ${computerChoice}`)

    switch(userChoice + '_' + computerChoice){
        case 'Pierre_Feuille':
        case 'Feuille_Ciseaux':
        case 'Ciseaux_Pierre':
            loses += 1;
            gameStatus.innerHTML = `Vous : ${userChoice} | Ordinateur : ${computerChoice} -> L'ordinateur a gagné!`
            break;
        case 'Pierre_Ciseaux':
        case 'Feuille_Pierre':
        case 'Ciseaux_Feuille':
            wins += 1;
            gameStatus.innerHTML = `Vous : ${userChoice} | Ordinateur : ${computerChoice} -> Vous avez gagné!`
            break;
        case 'Pierre_Pierre':
        case 'Feuille_Feuille':
        case 'Ciseaux_Ciseaux':
            wins += 1;
            gameStatus.innerHTML = `Vous : ${userChoice} | Ordinateur : ${computerChoice} -> Egalité!`
            break;
}
        gameScore.innerHTML = `Vous: ${wins} | Ordinateur: ${loses}`}

rock.addEventListener("click", ()=> runGame("Pierre"));
paper.addEventListener("click", ()=> runGame("Feuille"));
scissors.addEventListener("click", ()=> runGame("Ciseaux"));
document.getElementById('gameStatus').style.color = "white"
