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

  function declareTie() {
    if (game.remainingSpots === 0) {
      const tiedText = document.querySelector('.displaytext');
      const tieText = document.createTextNode('It`s a tie!');
      tiedText.appendChild(tieText);
    }
  }
  function setupBoard() {
    document.querySelectorAll('.boxes').forEach((boxes) => boxes.addEventListener('click', (e) => {
      if (boxes.innerHTML !== '') {
        return;
      }
      game.remainingSpots -= 1;
      console.log('checkWinner called');
      switchPlayers();
      board[e.target.id - 1] = activePlayer.token;
      // eslint-disable-next-line no-param-reassign
      boxes.innerHTML = activePlayer.token;
      checkWinner();
      declareTie();
      console.log(board);
    }));
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
  // adds eventlistener to square to enable update to board
  Array.from(squares.children).forEach(() => {
    // eslint-disable-next-line no-param-reassign
    game.checkWinner();
  });
})();
