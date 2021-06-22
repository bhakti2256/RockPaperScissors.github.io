// console.log('Hello World');
function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id;
    let botChoice = choice();
    dashboard(humanChoice,botChoice);
    let result = game(humanChoice,botChoice);
    document.getElementById('winner').innerText = result;
}

function dashboard(humanChoice,botChoice){
    if(botChoice == "rock"){
        document.getElementById('crock').style.display = "flex"
        document.getElementById('cpaper').style.display = "none"
        document.getElementById('cscissor').style.display = "none"
    }
    else if(botChoice == "paper"){
        document.getElementById('cpaper').style.display = "flex"
        document.getElementById('crock').style.display = "none"
        document.getElementById('cscissor').style.display = "none"
    }
    else if(botChoice == "scissor"){
        document.getElementById('cscissor').style.display = "flex"
        document.getElementById('cpaper').style.display = "none"
        document.getElementById('crock').style.display = "none"
    }
}

function choice(){
    let x = Math.floor(Math.random() * 3);
    if(x===0) 
        return "rock"
    else if(x===1)
        return "paper"
    else
        return "scissor"
}

function game(humanChoice, botChoice){
    if(botChoice === humanChoice){
        return "It's a tie!"
    }
    if(humanChoice =="rock"){
        if(botChoice == "scissor"){
            return "You Won!"
        }
        else{
            return "Computer Won!"
        }
    }
    if(humanChoice =="paper"){
        if(botChoice == "rock"){
            return "You Won!"
        }
        else{
            return "Computer Won!"
        }
    }
    if(humanChoice =="scissor"){
        if(botChoice == "paper"){
            return "You Won!"
        }
        else{
            return "Computer Won!"
        }
    }
}