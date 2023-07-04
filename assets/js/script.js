

// Creazione del container nel DOM
const chessContainer = document.querySelector('.chess-container');
const totalCells = 10 * 10;

for (let i = 0; i < totalCells; i++) {
    const singleCell = `<div class="chess-square"></div>`;
    //let singleCell = document.createElement('div');
    singleCell.classList.add('chess-square');
    chessContainer.innerHTML = i.toString();


    const container = document.createElement('chess-square');
    chessContainer.append(singleCell);

}



// Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
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


  // Creazione dell'elemento HTML
  const element = document.createElement('div');
  element.textContent = output;
  container.appendChild(element);

  // Aggiunta degli stili
  if (output === 'Fizz') {
    singleCell.classList.add('fizz');
  } else if (output === 'Buzz') {
    singleCell.classList.add('buzz');
  } else if (output === 'FizzBuzz') {
    singleCell.classList.add('fizz buzz');
  } else {
    singleCell.classList.add('number');
  }
}


