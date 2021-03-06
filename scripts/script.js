// defines global variables for wins and loses
    let wins = 0;
    let losses = 0;


// defines the scoreboard to be updated
const score = document.querySelector(".score");
const log = document.querySelector(".log");

// gives each of the buttons a selector for onclick
const selections = document.querySelectorAll(".selector");
selections.forEach((selection) => {
    selection.addEventListener('click', playGame);
});




function playGame(e){
    let choice = e.target.getAttribute("data-key");
    let NPC = computerPlay();
    let result = playRound(choice,NPC);
    switch (result){
        case true:
            wins++
            str = "won";
            break;
        case false:
            losses++
            str = "lost";
            break;
        case 'Tie':
            str = "tied";

    }
    score.textContent = `Wins: ${wins} Losses: ${losses}`;
    log.textContent = `You ${str}! ${choice} ${str} vs. ${NPC}.`;
    if (wins==5){
        alert("Congratulations! You won!");
        reset();
    }
    else if (losses==5) {
        alert("Game Over! You Lose!");
        reset();
    }
    
}

function reset(){
    wins = 0;
    losses = 0;
    score.textContent = `Wins: ${wins} Losses: ${losses}`;
}

function computerPlay() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function playRound(PC,NPC) {
    PC = PC.toLowerCase()
    NPC = NPC.toLowerCase()
    if (PC == NPC) {
        return "Tie"
    }
    else {
        switch (PC){
            case "rock":
                switch(NPC) {
                    case "paper":
                        return false
                    case "scissors":
                        return true
                }
            case "paper":
                switch(NPC) {
                        case "rock":
                            return true
                        case "scissors":
                            return false
                    }
            case "scissors":
                switch(NPC) {
                        case "paper":
                            return true
                        case "rock":
                            return false
                    }
        }
            
    }
}

function game() {
    wins = 0
    losses = 0
    for (i=1;i<=5;i++) {
        PC = prompt("r/p/s?")
        if (playRound(PC,computerPlay())) {
            wins++
            console.log(`You win!`)}
        else{
            losses++
            console.log(`You lose!`)
        }
        console.log(`Wins: ${wins} Loses: ${losses}`)
    }
}
