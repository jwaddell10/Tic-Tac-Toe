const gameBoard = (() => {
    const rows = 3;
    const columns = 3;
    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]

    for (let i = rows; i < rows.length; i++) {
        board[i] = [];
    } for (let j = columns; j < columns.length; j++) {
        board[i].push(Cell());
    }
    })();

const getBoard = () => board;

function playerMove () {

}

const Player = (
    playerOneName = "Player One",
    playerTwoName = "Player Two") => {


const players = [ 
{
    name: playerOneName,
    token: 'X'
}, 
{
    name: playerTwoName, 
    token: 'O'
}
    ]
    console.log(players);
let activePlayer = players[0];
}


function Cell() {
    board.push('x');
}

//when cells are clicked, something can happen
  const cells = document.querySelectorAll('.box');

  cells.forEach(element => {
    element.addEventListener('click', () => {
        console.log('is this running?')
    })
  })
