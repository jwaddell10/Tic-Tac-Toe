/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const gameBoard = (() => {
  const board = [];

  const createPlayer = (name, token) => ({ name, token });

  const playerOne = createPlayer('Player One', 'X');
  const playerTwo = createPlayer('Player Two', 'O');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 9; i++) {
    board.push('');
  }

  const squares = document.querySelector('.squares');

  board.forEach(() => {
    const square = document.createElement('div');
    // eslint-disable-next-line no-use-before-define, no-useless-concat
    const text = document.createTextNode('');
    square.className = 'square';
    squares.appendChild(square);
    square.appendChild(text);
  });

  Array.from(squares.children).forEach((square, index) => {
    square.addEventListener('click', () => {
      // eslint-disable-next-line no-param-reassign
      square.innerHTML = `${playerOne.token}`;
    });
  });

  // eslint-disable-next-line no-plusplus
  console.log(board);
  // eslint-disable-next-line no-undef
  // const squares = querySelectorAll('.squares');
  return { board };
});

gameBoard();

// gameController object here

const gameController = {
// function to switch turns, function to getactiveplayer, function to check winner
};

// factory function to create players

// const playerOne = playerFactory('playerOne', 'X');
// const playerTwo = playerFactory('playerTwo', 'O');

// controls flow of game

/* function gameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two",
) {
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

    console.log(players)
    let activePlayer = players[0]
    console.log(activePlayer)
    const switchPlayerTurn = () => {
        for (let i = board.rows; i < board.length; i++) {
            board[i] = [];
        } for (let j = board.columns; j < board.length; j++) {
            board[i].push(Cell());
        }
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
      };

    const getActivePlayer = () => activePlayer;

    switchPlayerTurn();
    getActivePlayer();
}
gameController();

/*const Player = (
    playerOneName = "Player One",
    playerTwoName = "Player Two") => {

const players = () => [
{
    name: playerOneName,
    token: 'X'
},
{
    name: playerTwoName,
    token: 'O'
}
    ]

}
console.log(Player.token) */

// when cells are clicked, something can happen
