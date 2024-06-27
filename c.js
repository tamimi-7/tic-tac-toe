cons cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["","","","","","","","",""];
let currentPLayer = "X";
let running = false;
initializGame();

function initializGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame );
    statusText.textContent = `${currentPlayer}'s turn` ;
    running = true;
}
function cellClicked(){
 const cellIndex = this.getAttribute("cellIndex");

 if(options[cellIndex] != "" || !running){
    return;
 }
 updateCell(this, cellIndex);
changePlayer
 checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPLayer;
    cell.textContent = currentPLayer;

}
function changePlayer(){
    currentPLayer =(currentPLayer == "X") ? "O" : "X";
    statusText,textContent = `${currentPLayer}'s turn `;

}
function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
roundWon= true;
break;
        }
    }
    if(roundWon){
    statusText,textContent = `${currentPLayer}wins! `;
    running = false;
    }
    else if(options.includes("")){
    statusText,textContent = `${currentPLayer}Draw! `;
    running = false;
    }
    else{
        changePlayer();
    }

}
function restartGame(){
    currentPLayer ="X";
    options = ["","","","","","","","",""];
    statusText,textContent = `${currentPLayer}'s turn `;
    cells.forEach(cell => cell.textContent = "");
    running = true;

}