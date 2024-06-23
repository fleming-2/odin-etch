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

// Pad side length in px
const sideLength = 960;

// Update no. of squares in pad
function updatePad(squares) {
    let container = document.querySelector('.container');

    // live collection of rows
    let rows = document.getElementsByClassName('row');

    // Remove unnecessary rows
    while (rows.length > squares) {
       container.removeChild(container.lastElementChild);
    }

    // Update rows
    for (let i = 0; i < squares; i++) {
        let row;
        if (i < rows.length) {
            row = rows[i];
        }
        else {
            // Add a new row
            row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
        }

        // Remove any extra row elements
        while (row.children.length > squares) {
            row.removeChild(row.lastElementChild);
        }

        // Add new row elements as required
        while (row.children.length < squares) {
            let newDiv = document.createElement('div');
            newDiv.addEventListener('mouseover', etch);
            row.appendChild(newDiv);
        }
    }

    reset();
}

// Create initial divs
updatePad(16);

// let divContainer = document.getElementsByClassName('container')[0];

// for (let i = 0; i < squareSize; i++) {
//     let row = document.createElement('div');
//     for (let j = 0; j < squareSize; j++) {
//         let newDiv = document.createElement('div');
//         newDiv.addEventListener('mouseover', etch);
//         row.appendChild(newDiv);
//     }

//     row.classList.add('row');
//     divContainer.appendChild(row);
// }

document.getElementById('reset').addEventListener('click', reset);
