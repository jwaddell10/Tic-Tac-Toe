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

const Player = () => {
const playerOneName = "Player One";
const playerTwoName = "Player Two";
}

function Cell() {
    board.push('x');
}


const Players = (X, O) => {
    const playerMove = () => console.log('is this running?')
    const checkThis = () => console.log('X', 'O');
    return {checkThis}
}

console.log(Players.checkThis);
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };

  const jeff = personFactory('jeff', 27);

  jeff.sayHello(); // calls the function and logs 'hello!'

console.log(jeff.name); // 'jeff'

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
//when cells are clicked, something can happen
  const cells = document.querySelectorAll('.box');

  cells.forEach(element => {
    element.addEventListener('click', () => {
        console.log('is this running?')
    })
  })


  console.log(calculator.add(3,5)); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476