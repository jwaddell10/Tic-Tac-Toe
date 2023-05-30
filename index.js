/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const squares = document.querySelector('.squares');

  // creates gameboard and displays to UI

  // adds eventlistener to square to enable update to board
  Array.from(squares.children).forEach((square, index) => {
    square.addEventListener('click', () => {
      board.innerHTML = `${index}`;
      console.log(board);
      console.log(this.data);
    });
  });
  console.log(board);
});
const board = ['', '', '', '', '', '', '', '', ''];

const createPlayer = (name, token) => ({ name, token });

const gameController = (() => {
  // eslint-disable-next-line max-len
  // function to switch turns, function to getactiveplayer, function to check winner, function to playround
  const playerOne = createPlayer('Player One', 'X');
  const playerTwo = createPlayer('Player Two', 'O');

  let activePlayer;
  console.log(activePlayer);

  let gameOver;

  function switchPlayers() {
    if (activePlayer === playerOne) {
      activePlayer = playerTwo;
    } else {
      activePlayer = playerOne;
    }
  }

  function playMove() {
    const squares = document.querySelectorAll('.boxes').forEach((boxes) => boxes.addEventListener('click', (e) => {
      switchPlayers();
      board[e.target.id - 1] = activePlayer.token;
      // eslint-disable-next-line no-param-reassign
      boxes.innerHTML = activePlayer.token;
      console.log(board);
    }));
  }
  playMove();
})();
