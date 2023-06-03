/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const board = ['', '', '', '', '', '', '', '', ''];

const createPlayer = (name, token) => ({ name, token });

const game = (() => {
  // eslint-disable-next-line max-len
  // function to switch turns, function to getactiveplayer, function to check winner, function to playround
  const playerOne = createPlayer('Player One', 'X');
  const playerTwo = createPlayer('Player Two', 'O');

  let activePlayer;
  console.log(activePlayer);

  let roundWon = false;
  let remainingSpots = 9;

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
        const winnerText = document.querySelector('.displaytext');
        const winText = document.createTextNode(`${activePlayer.name} wins!`);
        winnerText.appendChild(winText);

        break;
      }
    }
    // eslint-disable-next-line no-const-assign, no-constant-condition, no-cond-assign
  }
  function setupBoard() {
    document.querySelectorAll('.boxes').forEach((boxes) => boxes.addEventListener('click', (e) => {
      if (boxes.innerHTML !== '') {
        return;
      }
      console.log('checkWinner called');
      switchPlayers();
      board[e.target.id - 1] = activePlayer.token;
      // eslint-disable-next-line no-param-reassign
      boxes.innerHTML = activePlayer.token;
      checkWinner();
      console.log(board);
    }));
  }
  function declareTie() {
    console.log('its a tie!');
  }
  return {
    setupBoard,
    checkWinner,
    winConditions,
    switchPlayers,
    roundWon,
    activePlayer,
    declareTie,
    remainingSpots,
  };
})();

const gameBoard = (() => {
  // eslint-disable-next-line no-shadow
  const board = ['', '', '', '', '', '', '', '', ''];

  const squares = document.querySelector('.squares');

  // creates gameboard and displays to UI
  game.setupBoard();
  console.log('Setup Board is done');
  // adds eventlistener to square to enable update to board
  Array.from(squares.children).forEach(() => {
    // eslint-disable-next-line no-param-reassign
    console.log(game.remainingSpots);
    game.checkWinner();
  });
})();
