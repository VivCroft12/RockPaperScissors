function result(playerSelection, computerSelection)
{
    let player = 0;
    if(playerSelection.toUpperCase() === "rock".toUpperCase())
    {
	player = 0;
    }
    else if(playerSelection.toUpperCase() === "paper".toUpperCase())
    {
	player = 1;
    }
    else if(playerSelection.toUpperCase() === "scissors".toUpperCase())
    {
	player = 2;
    }

    let win = [[0,2,1],
	       [1,0,2],
	       [2,1,0]];
    let res = win[player][computerSelection];
    if(res == 0)
    {
	console.log("It's a tie!");
    }
    else if(res == 1)
    {
	console.log("You've won!");
    }
    else if(res == 2)
    {
	console.log("You've lost!");
    }
}

function computerPlay()
{
    rand = Math.floor(Math.random()*3);
    return rand;
    /*if(rand == 0)
    {
	return "rock";
    }
    else if(rand == 1)
    {
	return "paper";
    }
    return "scissors";*/
}


const playerSelection = "rock";
let computerSelection = computerPlay();
result(playerSelection, computerSelection);
