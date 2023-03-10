function initialLoad() {
    const sketchpad = document.createElement('div');
    sketchpad.setAttribute('id','sketchpad');
    document.querySelector('#container').appendChild(sketchpad);
}

function generateGrid(size) {
    if (size >= 100) {
        return;
    } else {
        const sketchpad = document.querySelector('#sketchpad');
        sketchpad.style['grid-template-columns'] = `repeat(${size}, minmax(10px, 1fr))`;
        sketchpad.style['grid-template-rows'] = `repeat(${size}, minmax(10px, 1fr)`;
        sketchpad.dataset['size'] = size;
        for (let x = 1; x <= size; x++){
            for (let y = 1; y <= size; y++) {
                const newSquare = document.createElement('div');
                newSquare.classList.add('gridSquare');
                sketchpad.appendChild(newSquare);
            }
        }
    }
}

function addMouseover() {
    const color = getRandomColor().join();
    const sketchpad = document.querySelector('#sketchpad');
    sketchpad.addEventListener('mouseover', (event) => {
        const tile = event.target;
        if (tile.classList.contains('gridSquare')) {
            tile.style['background-color'] = `rgb(${color})`;
        }
    });
    sketchpad.addEventListener('touchmove', (event) => {
        event.preventDefault();
        const allTiles = sketchpad.querySelectorAll('.gridSquare');
        const size = Number(sketchpad.dataset['size']);
        const rect = allTiles[0].getBoundingClientRect();
        for (const touch of event.changedTouches) {
            if (0 <= touch.clientX <= rect.width && 0 <= touch.clientY <= rect.height) {
                const x = Math.floor((touch.clientX - rect.left) / rect.width);
                const y = Math.floor((touch.clientY - rect.top) / rect.height);
                const tile = allTiles[y * size + x];
                tile.style['background-color'] = `rgb(${color})`;
            }
        }
    });
}

function resetGrid() {
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        const oldTiles = document.querySelectorAll('.gridSquare');
        oldTiles.forEach(tile => tile.remove());
        const newSize = prompt("Please enter the edge size of your new grid (limit 100)");
        document.querySelector('#sketchpad').removeEventListener('mouseover', (event) => {
            const tile = event.target;
            if (tile.classList.contains('gridSquare')) {
                tile.style['background-color'] = `rgb(${color})`;
            }
        });
        addMouseover();
        generateGrid(newSize);
    });
}

function getRandomColor() {
    const r = Math.ceil(Math.random()*255);
    const g = Math.ceil(Math.random()*255);
    const b = Math.ceil(Math.random()*255);
    return [r,g,b];
}

initialLoad();
addMouseover();
resetGrid();

generateGrid(16);
