//create global variable
//default color is black
let color = "black";
let click = false;

//ensures that all HTML is loaded before starting
document.addEventListener("DOMContentLoaded", function(){
    //default size
    createBoard(16);

    //turn drawing on or off
    document.querySelector("body").addEventListener("click", function(e) {
        if (e.target.tagName != "BUTTON") 
        {
            click = !click; //DeMorgan's Law
            let draw =  document.querySelector("#draw");

            if (click)
            {
                draw.innerHTML = "Click anywhere to stop drawing.";
            }

            else
            {
                draw.innerHTML = "Click anywhere to start drawing.";
            }
        }
    })

    //call functions to reset board
    let popupBtn = document.querySelector("#popup");
    popupBtn.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
})

//create board
function createBoard(size)
{
    //select the container div
    let board = document.querySelector(".container");

    //create a grid
    //backticks are template literals used when we need a placeholder (${})
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //convert all the grid squares into individual divs
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++)
    {
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

//allow user to pick size of the grid
function getSize()
{
    let input = prompt("Provide board size:");
    let message = document.querySelector("#message");

    if(input == "")
    {
        message.innerHTML = "Please provide a number.";
    }

    else if (input < 0 || input > 100)
    {
        message.innerHTML = "Provide a number between 1 and 100";
    }

    else 
    {
        message.innerHTML = "Board size successfully changed!";
        return input;
    }
}

//change the color
function colorDiv()
{
    if (click)
    {
        if (color == "random")
        {  
            //access the current div
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }

        else
        {
            this.style.backgroundColor = 'black';
        }
    }
}

//set color based on the button pressed
function setColor(colorChoice)
{
    color = colorChoice;
}

//reset the board
function resetBoard() 
{
    let divs = document.querySelectorAll(".container div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}