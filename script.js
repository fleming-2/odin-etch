"use strict";

// Makes divs black
function etch(event) {
    event.target.classList.add('black');
}

// Resets all divs
function reset() {
    document.querySelectorAll('.row div').forEach(div =>
            div.classList.remove('black'));
}

// Create initial divs

let squareSize = 16;

let divContainer = document.getElementsByClassName('container')[0];

for (let i = 0; i < squareSize; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < squareSize; j++) {
        let newDiv = document.createElement('div');
        newDiv.addEventListener('mouseover', etch);
        row.appendChild(newDiv);
    }

    row.classList.add('row');
    divContainer.appendChild(row);
}

document.getElementById('reset').addEventListener('click', reset);
