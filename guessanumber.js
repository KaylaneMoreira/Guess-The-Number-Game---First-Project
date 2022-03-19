function randomnumber() {
    return Math.floor(Math.random() * (100));
}

const randomnumbervar = randomnumber()
console.log('Gerando número aleatório ' + randomnumbervar);
let turn = 1;
const submit = document.body.getElementsByClassName('guessSubmit')[0]

const ifresults = () => {
    let lastUserGuess = guesses[guesses.length - 1];
    let lowResult = lastUserGuess < randomnumbervar;
    let highResult = lastUserGuess > randomnumbervar;
    let rightResult = lastUserGuess == randomnumbervar;
    if (turn == 11) {
        submit.disabled = true;
        field.disabled = true;

        gameover.innerHTML = 'Game Over';

        const newgamebtn = document.querySelector('button')
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

        const newgamebtn = document.querySelector('button');
        newgamebtn.addEventListener('click', refresh)
    }
}

const nextTurn = () => {
    ++turn
    guesses.push(field.value);
    guesses = guesses.map(Number)
    field.value = '';
    const prevGuesses = document.querySelector('p.guesses');
    prevGuesses.innerHTML = `Previous: ${guesses}`;
    ifresults();
}

submit.addEventListener('click', nextTurn)

let field = document.querySelector('input.guessField');
let guesses = [];
const changecolor = document.querySelector('p.lastResult');
const gameover = document.querySelector('p.lastResult');

const wrong = (changecolor) => {
    changecolor.style.backgroundColor = "rgb(155, 39, 45)";
    changecolor.style.color = "white";
    changecolor.style.borderRadius = "30px"
}

const right = (changecolor) => {
    changecolor.style.backgroundColor = "rgb(12, 141, 92)";
    changecolor.style.color = "white";
    changecolor.style.borderRadius = "30px"
}

const refresh = () => {
    document.location.reload(true);
}






