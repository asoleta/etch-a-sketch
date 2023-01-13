//ensures that all HTML is loaded before starting
document.addEventListener("DOMContentLoaded", function(){
    //default size
    createBoard(16);

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