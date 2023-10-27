let userChoice = '';
let resetScore = {
  win: 0,
  lose: 0,
  tie: 0,
};

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  userChoice = 'ROCK';
  rps();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  userChoice = 'PAPER';
  rps();
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
  userChoice = 'SCISSOR';
  rps();
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  resetScore.win = 0;
  resetScore.lose = 0;
  resetScore.tie = 0;
  localStorage.removeItem('score');
  document.querySelector(
    '#score'
  ).innerHTML = `win: ${resetScore.win}    lose: ${resetScore.lose}   tie :${resetScore.tie}
    `;
});

resetScore = JSON.parse(localStorage.getItem('score'));

if (resetScore === null) {
  resetScore = {
    win: 0,
    lose: 0,
    tie: 0,
  };
}

function rps() {
  const computerChoice = ['ROCK', 'PAPER', 'SCISSOR'];

  let CC = computerChoice[Math.floor(Math.random() * 3)];

  console.log(CC);

  if (CC === 'ROCK' && userChoice === 'SCISSOR') {
    resetScore.lose++;

    result(userChoice, CC);
    score();

    document.querySelector('#status').innerHTML = `COMPUTER WINS`;
  } else if (userChoice === 'ROCK' && CC === 'SCISSOR') {
    resetScore.win++;
    result(userChoice, CC);
    score();

    document.querySelector('#status').innerHTML = `YOU WIN`;
  } else if (CC === 'PAPER' && userChoice === 'ROCK') {
    resetScore.lose++;
    result(userChoice, CC);
    score();

    document.querySelector('#status').innerHTML = `COMPUTER WINS`;
  } else if (userChoice === 'PAPER' && CC === 'ROCK') {
    resetScore.win++;
    result(userChoice, CC);
    score(userChoice, CC);

    document.querySelector('#status').innerHTML = `YOU WIN`;
  } else if (CC === 'SCISSOR' && userChoice === 'PAPER') {
    resetScore.lose++;
    result(userChoice, CC);
    score();

    document.querySelector('#status').innerHTML = `COMPUTER WINS`;
  } else if (userChoice === 'SCISSOR' && CC === 'PAPER') {
    resetScore.win++;

    result(userChoice, CC);

    score();
    document.querySelector('#status').innerHTML = `YOU WIN`;
  } else if (
    (CC === 'ROCK' && userChoice === 'ROCK') ||
    (CC === 'PAPER' && userChoice === 'PAPER') ||
    (CC === 'SCISSOR' && userChoice === 'SCISSOR')
  ) {
    resetScore.tie++;
    result(userChoice, CC);
    score();

    document.querySelector('#status').innerHTML = ` YOU ARE A TIE`;
  }

  localStorage.setItem('score', JSON.stringify(resetScore));
}

document.querySelector('#reload').onclick = () => {
  document.location.reload();
};

function result(userChoice, CC) {
  document.querySelector(
    '#message'
  ).innerHTML = `you choose ${userChoice} and computer choose ${CC}`;
}

function score(userChoice, CC) {
    document.querySelector(
        '#score'
    ).innerHTML = `win: ${resetScore.win}    lose: ${resetScore.lose}   tie :${resetScore.tie}
    `;
}
