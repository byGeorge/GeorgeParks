function setBoard(){
    let board = document.getElementById("board");
    let size = document.getElementById("size").value;
    switch(size) {
        case ("small"):
            board.innerHTML = fillBoard(4,4);
            break;
        case ("medium"):
            board.innerHTML = fillBoard(10,5);
            break;
        case ("large"):
            board.innerHTML = fillBoard(16,8);
            break;
    }
}

let gameBoard = [];
let totalSquares = 0;
function fillBoard(across, down){
    document.getElementById("board").classList.remove("hidden");
    let returnBoard = [];
    gameBoard = [];
    totalSquares = across * down;
    for (let i = 0; i < down; i++){
        returnBoard.push(`<div class='across-container'>`);
        gameBoard.push([]);
        for (let j = 0; j < across; j++){
            returnBoard.push(`<div class='square item-${j} row-${i}' onclick='clickItem(${j},${i})'></div>`);
            gameBoard[i].push(-1);
        }
        returnBoard.push("</div>");
    }
    return returnBoard.join('');
}

var itemsClicked = 0;
var clicked1;
var clicked2;
function clickItem(across, down){
    if (itemsClicked === 0) {
        clicked1 = document.getElementsByClassName("row-" + down + " item-" + across)[0];
        if (gameBoard[down][across] === -1)
            assignMatchable(across, down, clicked1);
        clicked1.innerHTML = gameBoard[down][across];
        clicked1.classList.add("revealed");
        itemsClicked++;
    }
    else if (itemsClicked < 2) {
        clicked2 = document.getElementsByClassName("row-" + down + " item-" + across)[0];
        if (gameBoard[down][across] === -1)
            assignMatchable(across, down, clicked2);
        clicked2.innerHTML = gameBoard[down][across];
        clicked2.classList.add("revealed");

        if (!doesMatch(clicked1, clicked2)){
            document.getElementById("shield").classList.remove("hidden");
            setTimeout(() =>{
                clicked1.classList.remove("revealed");
                clicked2.classList.remove("revealed");
                clicked1.innerHTML = "";
                clicked2.innerHTML = "";
                clicked1 = null;
                clicked2 = null;
                document.getElementById("shield").classList.add("hidden");
            }, 3000);
        }
        itemsClicked = 0;
    }
}

function doesMatch(element1, element2) {
    return element1.innerHTML === element2.innerHTML;
}

let triedNumbers = [];
function assignMatchable(across, down, matchableItem){
    let success = false;
    do {
        let found = false;
        let tryNumber = Math.floor(Math.random() * totalSquares / 2);
        for (let i = 0; i < triedNumbers.length; i++) {
            if (tryNumber === triedNumbers[i][0]) {
                if (triedNumbers[i][1] == 1) {
                    gameBoard[down][across] = tryNumber;
                    triedNumbers[i][1] = 2;
                    matchableItem.classList.add("matchable-" + tryNumber);
                    success = true;
                }
                else {
                    // number has been assigned twice already, no need to continue searching the array
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            gameBoard[down][across] = tryNumber;
            triedNumbers.push([tryNumber, 1]);
            matchableItem.classList.add("matchable-" + tryNumber);
            success = true;
        }
    } while (!success)
}