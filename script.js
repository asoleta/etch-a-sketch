//ensures that all HTML is loaded before starting
document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    console.log("test");
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
}