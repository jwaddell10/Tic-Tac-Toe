/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  // eslint-disable-next-line no-plusplus
  // eslint-disable-next-line no-plusplus

  // eslint-disable-next-line no-plusplus

  const squares = document.querySelector('.squares');

  // creates gameboard and displays to UI

  // adds eventlistener to square to enable update to board
  Array.from(squares.children).forEach((square, index) => {
    square.addEventListener('click', () => {
      // eslint-disable-next-line no-param-reassign, no-useless-concat
      board.innerHTML = `${index}`;// depending on square clicked, push to board array
      console.log(board);
    });
  });
  // eslint-disable-next-line no-plusplus
  console.log(board);
  // eslint-disable-next-line no-undef
});
  // eslint-disable-next-line no-undef
const board = ['', '', '', '', '', '', '', '', ''];

const createPlayer = (name, token) => ({ name, token });

const gameController = (() => {
  // eslint-disable-next-line max-len
  // function to switch turns, function to getactiveplayer, function to check winner, function to playround
  const playerOne = createPlayer('Player One', 'X');
  const playerTwo = createPlayer('Player Two', 'O');
  console.log(playerOne.token);
  let activePlayer;
  let currentPlayerIndex;
  let gameOver;

  function playMove() {
    const squares = document.querySelectorAll('.boxes').forEach((boxes) => boxes.addEventListener('click', () => {
      board.push(`${playerOne.token}`);
      console.log(board);
    }));
      // eslint-disable-next-line no-plusplus
  }
  playMove();
  const switchPlayerTurn = () => {
  };

  switchPlayerTurn();
})();
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
