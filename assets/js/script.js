

// Creazione del container nel DOM
const chessContainer = document.querySelector('.chess-container');
const totalCells = 10 * 10;

for (let i = 1; i <= totalCells; i++) {
    let singleCell = document.createElement('div');
    singleCell.classList.add('chess-square');
    
    let output = '';

    // Controllo multipli di 3
    if (i % 3 === 0) {
      output += 'Fizz';
    }
  
    // Controllo multipli di 5
    if (i % 5 === 0) {
      output += 'Buzz';
    }
  
    // Controllo se output è vuoto
    if (output === '') {
      output = i;
    }

    singleCell.innerHTML = output

    // Aggiunta degli stili
    
  if (output === 'Fizz') {
    singleCell.classList.add('fizz');
  } else if (output === 'Buzz') {
    singleCell.classList.add('buzz');
  } else if (output === 'FizzBuzz') {
    singleCell.classList.add('fizzbuzz');
  } else {
    singleCell.classList.add('number');
  }


    chessContainer.appendChild(singleCell);

}



