var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

var box = document.getElementById('box');
var winner = document.getElementById('winner');
var description = document.getElementById('description');
var button = document.getElementById('button');

var score = document.getElementById('score');



rock.addEventListener('click', rockPick);
paper.addEventListener('click', paperPick);
scissors.addEventListener('click', scissorsPick);
button.addEventListener('click', playAgain);

var playerPick = [];
var computerPick = [];




function computerChoice(){
    var random = Math.floor(Math.random() * 3);
    
    if(random === 0){
        computerPick.push(0);
    } else if(random === 1){
        computerPick.push(1);
    } else{
        computerPick.push(2);
    }
    console.log(computerPick);

} 

function rockPick(){
    const number = score.innerText;
    const num = parseInt(number, 10);

    playerPick.push('rock');
    computerChoice();

    if(playerPick = ['rock'] && computerPick == 0){
        console.log('its a draw');
        winner.innerText = 'ITS A DRAW!';
        description.innerText = 'BOTH YOU AND COMPUTER PICKED ROCK';
        box.style.display = 'block';
        button.style.display = 'inline';
        rock.style.borderColor = 'rgb(54, 54, 156)';
        paper.style.borderColor = 'grey';
        scissors.style.borderColor = 'grey';
        score.innerText = num;
        

    } else if(playerPick = ['rock'] && computerPick == 1){
        console.log('You lost');
        winner.innerText = 'YOU LOST!';
        description.innerText = 'YOU PICKED ROCK WHILE THE COMPUTER PICKED PAPER';
        box.style.display = 'block';
        button.style.display = 'inline';
        paper.style.borderColor = 'red';
        rock.style.borderColor = 'grey';
        scissors.style.borderColor = 'grey';
        score.innerText = num - 1;
        if (num <= 0){
            textBox.style.color = 'red';
        }


    }else if(playerPick = ['rock'] && computerPick == 2){
        console.log('YOU WON!');
        winner.innerText = 'YOU WON!';
        description.innerText = 'YOU PICKED ROCK WHILE THE COMPUTER PICKED SCISSORS';
        box.style.display = 'block';
        button.style.display = 'inline';
        rock.style.borderColor = '#09CD64';
        paper.style.borderColor = 'grey';
        scissors.style.borderColor = 'grey';
        score.innerText = num + 1;
        if (num >= 0){
            textBox.style.color = 'red';
        }
    }
} 

function paperPick(){
    const number = score.innerText;
    const num = parseInt(number, 10);

    playerPick.push('paper');
    console.log(playerPick);
    computerChoice();

    if(playerPick = ['paper'] && computerPick == 1){
        console.log('its a draw');
        winner.innerText = 'ITS A DRAW!';
        description.innerText = 'BOTH YOU AND COMPUTER PICKED PAPER';
        box.style.display = 'block';
        button.style.display = 'inline';
        rock.style.borderColor = 'grey';
        paper.style.borderColor = 'rgb(54, 54, 156)';
        scissors.style.borderColor = 'grey';
        score.innerText = num;
        
    } else if(playerPick = ['paper'] && computerPick == 0){
        console.log('Yo Won');
        winner.innerText = 'YOU WON!';
        description.innerText = 'YOU PICKED PAPER WHILE THE COMPUTER PICKED ROCK';
        box.style.display = 'block';
        button.style.display = 'inline';
        rock.style.borderColor = 'grey';
        paper.style.borderColor = '#09CD64';
        scissors.style.borderColor = 'grey';
        score.innerText = num + 1;
        if (num >= 0){
            textBox.style.color = 'red';
        }

    }else if(playerPick = ['rock'] && computerPick == 2){
        console.log('YOU Lost!');
        winner.innerText = 'YOU LOST';
        description.innerText = 'YOU PICKED PAPER WHILE THE COMPUTER PICKED SCISSORS';
        box.style.display = 'block';
        button.style.display = 'inline';
        paper.style.borderColor = 'grey';
        rock.style.borderColor = 'grey';
        scissors.style.borderColor = 'red';
        score.innerText = num - 1;
        if (num <= 0){
            textBox.style.color = 'red';
        }

    }

}

function scissorsPick(){
    const number = score.innerText;
    const num = parseInt(number, 10);
    
    playerPick.push('scissors');
    console.log(playerPick);
    computerChoice();

    if(playerPick = ['scissors'] && computerPick == 0){
        console.log('You Lost');
        winner.innerText = 'YOU LOST';
        description.innerText = 'YOU PICKED SCISSORS WHILE THE COMPUTER PICKED ROCK';
        box.style.display = 'block';
        button.style.display = 'inline';
        paper.style.borderColor = 'grey';
        rock.style.borderColor = 'red';
        scissors.style.borderColor = 'grey';
        score.innerText = num - 1;
        if (num <= 0){
            textBox.style.color = 'red';
        }

    } else if(playerPick = ['scissors'] && computerPick == 1){
        console.log('Yo Won');
        winner.innerText = 'YOU WON!';
        description.innerText = 'YOU PICKED SCISSORS WHILE THE COMPUTER PICKED PAPER';
        box.style.display = 'block';
        button.style.display = 'inline';
        rock.style.borderColor = 'grey';
        paper.style.borderColor = 'grey';
        scissors.style.borderColor = '#09CD64';
        score.innerText = num + 1;
        if (num >= 0){
            textBox.style.color = 'red';
        }

    }else if(playerPick = ['rock'] && computerPick == 2){
        console.log('ITS A DRAW');
        winner.innerText = 'ITS A DRAW';
        description.innerText = 'BOTH U AND THE COMPUTER PICKED SCISSORS';
        box.style.display = 'block';
        button.style.display = 'inline';
        rock.style.borderColor = 'grey';
        paper.style.borderColor = 'grey';
        scissors.style.borderColor = 'rgb(54, 54, 156)';
        score.innerText = num;
        

    }
}

function playAgain(){
    rock.style.borderColor = 'grey';
    paper.style.borderColor = 'grey';
    scissors.style.borderColor = 'grey';
    box.style.display = 'none';
    button.style.display = 'none';
    playerPick = [];
    computerPick = [];
}



