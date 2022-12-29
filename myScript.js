function generateGrid(size) {
    const sketchpad = document.createElement('div');
    sketchpad.setAttribute('id','sketchpad');
    sketchpad.style['grid-template-columns'] = `repeat(${size}, minmax(10px, 1fr))`;
    sketchpad.style['grid-template-rows'] = `repeat(${size}, minmax(10px, 1fr)`;
    document.querySelector('#container').appendChild(sketchpad);

    for (let x = 1; x <= size; x++){
        for (let y = 1; y <= size; y++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('gridSquare');
            sketchpad.appendChild(newSquare);
        }
    }
}

function addListeners() {
    const tiles = document.querySelectorAll('.gridSquare');
    tiles.forEach(sketchTile => sketchTile.addEventListener('mouseover', () => sketchTile.style['backgroundColor'] = 'blue'));
}

function resetGrid() {
    const reset = document.querySelector('#reset');
    console.log('test resetgrid function run');
    reset.addEventListener('click', () => {
        console.log('test click run');
        const sketchpad = document.getElementById('sketchpad');
        sketchpad.remove();
        const newSize = prompt("Please enter the edge size of your new grid (limit 100)");
        generateGrid(newSize);
        addListeners();
    });
}

generateGrid(16);
addListeners();
resetGrid();