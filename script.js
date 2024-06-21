"use strict";

// Create initial divs

let squareSize = 16;

let divContainer = document.getElementsByClassName('container')[0];

for (let i = 0; i < squareSize; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < squareSize; j++) {
        let newDiv = document.createElement('div');
        newDiv.textContent = '▢';
        row.appendChild(newDiv);
    }

    row.classList.add('row');
    divContainer.appendChild(row);
}
