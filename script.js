"use strict";

// Makes divs darker by 10%
function etch(event) {
    const oldOpacity = Number(event.target.style.opacity);
    if (oldOpacity < 1) {
        event.target.style.opacity = 0.1 + oldOpacity;
    }
}

// Resets all divs
function reset() {
    document.querySelectorAll('.row div').forEach(div =>
        div.style.removeProperty('opacity')
    )
}

// Pad side length in px
const sideLength = 640;

// Update no. of squares in pad
function updatePad(squares) {
    // Restyle the divs to maintain the same size
    let styleElement = document.querySelector('style');
    let newSize = sideLength /squares;
    styleElement.textContent = `.row div {
        width: ${newSize}px;
        height: ${newSize}px;
    }`;

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
}

// Create initial divs
updatePad(16);

// Button events
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('change').addEventListener('click', function() {
    const newSize = parseInt(prompt("Number of dots per side for new grid:"));
    updatePad(newSize > 0 ? newSize : 16);
});
