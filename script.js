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
const sideLength = 640;

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

    // Resize the divs
    let styleElement = document.querySelector('style');
    let newSize = sideLength /squares;
    styleElement.textContent = `.row div {
        width: ${newSize}px;
        height: ${newSize}px;
    }`;

    // let newSize = `${sideLength / squares}px`;
    // const resizeDiv = function(div) {
    //     div.style.width = newSize;
    //     div.style.height = newSize;
    // }
    // document.querySelectorAll('.row div').forEach(resizeDiv);
}

// Create initial divs
updatePad(16);

// Button events
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('change').addEventListener('click', function() {
    const newSize = parseInt(prompt("Number of dots per side for new grid:"));
    updatePad(newSize > 0 ? newSize : 16);
});
