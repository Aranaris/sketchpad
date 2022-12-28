function generateGrid(size) {
    currentDiv = document.getElementById('container');
    const sketchpad = document.createElement('div');
    sketchpad.setAttribute('id','sketchpad');
    sketchpad.style['display'] = 'grid';
    sketchpad.style['grid-template-columns'] = `repeat(${size}, minmax(10px, 1fr))`;
    sketchpad.style['grid-template-rows'] = `repeat(${size}, minmax(10px, 1fr)`;
    sketchpad.style['border'] = 'solid';
    sketchpad.style['borderColor'] = 'red';  
    currentDiv.appendChild(sketchpad);

    for (let x = 1; x <= size; x++){
        for (let y = 1; y <= size; y++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('gridSquare');
            newSquare.style['gridColumn'] = x;
            newSquare.style['gridRow'] = y;
            newSquare.style['border'] = 'dashed';
            newSquare.style['borderColor'] = 'gray';
            newSquare.style['aspectRatio'] = 1;
            //newSquare.style['margin'] = '1px';
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