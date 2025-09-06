let buttons = document.querySelectorAll(".buttons");
let uButton = document.getElementById("uButton");
let cButton = document.getElementById("cButton");
let resultDisplay = document.getElementById("resultDisplay");
let userCount = 0;
let computerCount = 0;
let textbox = document.getElementById("textbox");
let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");

const choiceImages = {
    "rock": "🪨",
    "paper": "📄",
    "scissor": "✂️"
};

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        choices = ["rock","paper","scissor"];
        let computerChoice = choices[Math.floor(Math.random()*3)];
        let userChoice = event.target.id;
        let result = gameResult(userChoice,computerChoice);
        uButton.innerHTML = `${choiceImages[userChoice]}`;
        cButton.innerHTML = `${choiceImages[computerChoice]}`;
        resetClasses();
        if(result === "You WIN"){
            textbox.classList.add("green");
            textbox.textContent = result;
            userCount++;
            resultDisplay.style.backgroundColor = "green";
            resultDisplay.style.boxShadow = "0px 0px 10px white, 0px 0px 20px green,  0px 0px 40px green, 0px 0px 40px green";
        }else if(result === "You LOSE"){
            textbox.classList.add("red");
            textbox.textContent = result;
            computerCount++;
            resultDisplay.style.backgroundColor = "crimson";
            resultDisplay.style.boxShadow = "0px 0px 10px white, 0px 0px 20px crimson,  0px 0px 40px crimson, 0px 0px 40px crimson";
        }else if(result === "It's a TIE"){
            textbox.classList.add("gray");
            textbox.textContent = result;
            resultDisplay.style.backgroundColor = "gray";
            resultDisplay.style.boxShadow = "0px 0px 10px white, 0px 0px 20px gray,  0px 0px 40px gray, 0px 0px 40px gray";
        }
        textbox.textContent = result;
        userScore.textContent = `You - ${userCount}`;
        computerScore.textContent = `Bot - ${computerCount}`;
    })
});


function gameResult(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return "It's a TIE";
    }else{
        switch(computerChoice){
            case "rock":
                return userChoice === "paper"? "You WIN":"You LOSE";
            case "paper":
                return userChoice === "scissor"?"You WIN": "You LOSE";
            case "scissor":
                return userChoice === "rock"?"You WIN": "You LOSE"; 
        }
    }
}

function defaultSettings(){
    resultDisplay.style.backgroundColor = "antiquewhite";
    resultDisplay.style.boxShadow = "0px 0px 10px white, 0px 0px 20px antiquewhite,  0px 0px 40px antiquewhite, 0px 0px 40px antiquewhite";
    uButton.innerHTML = "";
    cButton.innerHTML = "";
    userCount = 0;
    computerCount = 0;
    textbox.textContent = "";
    userScore.textContent = `You - 0`;
    computerScore.textContent = `Bot - 0`;
}

function resetClasses() {
    textbox.classList.remove("green", "red", "gray");
}