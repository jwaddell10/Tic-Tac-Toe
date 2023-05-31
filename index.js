/* eslint-disable prefer-const */
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
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    let roundWon = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 7; i++) {
      const winningCondition = winConditions[i];
      // eslint-disable-next-line prefer-const
      let a = board[winningCondition[0]];
      let b = board[winningCondition[1]];
      let c = board[winningCondition[2]];

      if (a === '' || b === '' || c === '') {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        console.log('winner');

        break;
      }
    }
    // eslint-disable-next-line no-const-assign, no-constant-condition, no-cond-assign
  }
  function playMove() {
    const squares = document.querySelectorAll('.boxes').forEach((boxes) => boxes.addEventListener('click', (e) => {
      checkWinner();
      if (boxes.innerHTML !== '') {
        return;
      }
      switchPlayers();
      board[e.target.id - 1] = activePlayer.token;
      // eslint-disable-next-line no-param-reassign
      boxes.innerHTML = activePlayer.token;
      console.log(board);
    }));
  }playMove();
})();
