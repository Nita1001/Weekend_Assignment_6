const TOTAL_TILES = 144;
const INV_TILES = 6;
let container = document.querySelector('#tiles-container');
const inventoryElementTiles = document.querySelector('#elements-grid');
const inventoryToolTiles = document.querySelector('#tools-grid');


function createGameBoard(){
    // sky
    for(let i = 0; i < TOTAL_TILES; i++)
    {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('tile');
        div.classList.add('sky-tile');
        div.setAttribute('id', `tile${i}`);
       
    }
    // grass
    for(let i = 96 ; i < 112 ; i++)
    {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add('grass-tile');
    }
    // dirt
    for(let i = 112; i < TOTAL_TILES ; i++)
    {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add('dirt-tile');
    }



    // checked removing tile 
    // const div = document.querySelector(`#tile${86}`);
    // div.classList.remove('dirt-tile');


}

function createInventory(){
    
    // inventory - elements and tools
    for(let i = 0; i < INV_TILES; i++)
    {
        const element = document.createElement('div');
        inventoryElementTiles.appendChild(element);
        element.classList.add('tile');
        element.classList.add('dark-tile');
        element.classList.add('tile-border');
        element.classList.add('scale');
        element.setAttribute('id', `element${i}`);
    }
    for(let i = 0; i < INV_TILES; i++)
    {
        const tool = document.createElement('div');
        inventoryToolTiles.appendChild(tool);
        tool.classList.add('tile');
        tool.classList.add('dark-tile');
        tool.classList.add('tile-border');
        tool.classList.add('scale');
        tool.setAttribute('id', `tool${i}`);
    }

}



const element = document.querySelector('#element2');
element.classList.add('apple-img');
const axe = document.querySelector('#tool0');
axe.classList.add('axe-img');
const shovel = document.querySelector('#tool1');
shovel.classList.add('shovel-img');

// trying to remove dirt 
function handleShovel(){

}

shovel.addEventListener('click', handleShovel());

function sky(){}
function dirt(){}

createGameBoard();
createInventory();
sky();
dirt();
        // div.classList.add('tile-border');

