function cpu (choise) {

    if (choise == 1) {
        choise = "rock";
    }
    else if (choise == 2) {
        choise = "paper"
    }
    else if (choise == 3) {
        choise = "scissors"
    }
    return choise;
}
let CPUresult = cpu(Math.round(Math.random() * 2 + 1));


let playerChoise = prompt("Type either rock, paper or scissors");

let casePlayerChoise = playerChoise.toLocaleLowerCase(); 



function game (CPUresult, casePlayerChoise) {

    if (CPUresult === casePlayerChoise)
    {
        return "It's a TIE!!!";
    }

    else if (
        (CPUresult === "rock" && casePlayerChoise === "scissors") ||
        (CPUresult === "paper" && casePlayerChoise === "rock") ||
        (CPUresult === "scissors" && casePlayerChoise === "paper")
        ) {
        return x = "You Lose " + CPUresult + " Beats " + casePlayerChoise;
    }

    else {
        return y = "You Win " + casePlayerChoise + " Beats " + CPUresult;
    }

}

let gameResult = game(CPUresult, casePlayerChoise);

console.log(gameResult);

