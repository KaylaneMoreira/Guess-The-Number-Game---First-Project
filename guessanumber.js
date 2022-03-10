function randomnumber() {
    return Math.floor(Math.random() * (100));
}

const randomnumbervar = randomnumber()
console.log('Gerando número aleatório ' + randomnumbervar);

let turn = 1;
const submit = document.body.getElementsByClassName('guessSubmit')[0]

submit.addEventListener('click', nextTurn)

let field = document.querySelectorAll('input.guessField')[0];
let guesses = [];
const changecolor = document.querySelectorAll('p.lastResult')[0];
const gameover = document.querySelectorAll('p.lastResult')[0];

function wrong(changecolor) {
    changecolor.style.backgroundColor = "red";
    changecolor.style.color = "white";
}

function right(changecolor) {
    changecolor.style.backgroundColor = "green";
    changecolor.style.backgroundColor = "white";
}

function refresh() {
    document.location.reload(true);
}

function nextTurn() {
    ++turn
    guesses.push(field.value);
    guesses = guesses.map(Number)
    field.value = '';
    const prevGuesses = document.querySelectorAll('p.guesses')[0];
    prevGuesses.innerHTML = `Previous: ${guesses}`;
    ifresults();
}


function ifresults() {

    let lastUserGuess = guesses[guesses.length - 1];
    let lowResult = lastUserGuess < randomnumbervar;
    let highResult = lastUserGuess > randomnumbervar;
    let rightResult = lastUserGuess == randomnumbervar;
    if (turn == 11) {
        submit.disabled = true;
        field.disabled = true;

        gameover.innerHTML = 'Gamover';

        const newgame = document.createElement('button')
        document.body.appendChild(newgame);
        newgame.textContent = 'Start new game';

        const newgamebtn = document.querySelectorAll('button')[0];
        newgamebtn.addEventListener('click', refresh)
    }
    else if (lowResult) {
        const lowResulte = document.querySelector('p.lastResult');
        lowResulte.innerHTML = 'Last Result: Too Low';
        wrong(changecolor);
        console.log(lowResult);
        console.log(highResult);
        console.log(rightResult);
    }
    else if (highResult) {
        const highResulte = document.querySelector('p.lastResult');
        highResulte.innerHTML = 'Last Result: Too High';
        wrong(changecolor);
    }
    else if (rightResult) {
        const rightResulte = document.querySelector('p.lastResult');
        rightResulte.innerHTML = 'Congratulations';
        right(changecolor);

        submit.disabled = true;
        field.disabled = true;

        const newgame = document.createElement('button')
        document.body.appendChild(newgame);
        newgame.textContent = 'Start new game'

        const newgamebtn = document.querySelectorAll('button')[0];
        newgamebtn.addEventListener('click', refresh)
    }
    else { }
}




