const TOTAL_TILES = 144;
const INV_TILES = 6;
let container = document.querySelector('#tiles-container');
const inventoryTileTiles = document.querySelector('#inv-grid');
const inventoryToolTiles = document.querySelector('#tools-grid');


function createGameBoard(){

    for(let i = 0; i < TOTAL_TILES; i++)
    {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('tile');
        div.classList.add('dark-tile');
        div.classList.add('tile-border');
        div.setAttribute('id', `tile${i}`);
    }

    // inventory - tiles and tools
    for(let i = 0; i < INV_TILES; i++)
    {
        const div = document.createElement('div');
        inventoryTileTiles.appendChild(div);
        div.classList.add('tile');
        div.classList.add('dark-tile');
        div.classList.add('tile-border');
        div.setAttribute('id', `tile${i}`);
    }
    for(let i = 0; i < INV_TILES; i++)
    {
        const div = document.createElement('div');
        inventoryToolTiles.appendChild(div);
        div.classList.add('tile');
        div.classList.add('dark-tile');
        div.classList.add('tile-border');
        div.setAttribute('id', `tile${i}`);
    }

}



function sky(){}
function dirt(){}

createGameBoard();
sky();
dirt();

