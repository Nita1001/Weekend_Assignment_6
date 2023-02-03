const TOTAL_TILES = 144;
const INV_TILES = 6;
let container = document.querySelector("#tiles-container");
const inventoryElementTiles = document.querySelector("#elements-grid");
const inventoryToolTiles = document.querySelector("#tools-grid");

function createGameBoard() {
    // sky
    for (let i = 0; i < TOTAL_TILES; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("tile");
        div.classList.add("sky-tile");
        div.setAttribute("id", `tile${i}`);
    }
    // grass
    for (let i = 96; i < 112; i++) {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add("grass-tile");
    }
    // dirt
    for (let i = 112; i < TOTAL_TILES; i++) {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add("dirt-tile");
    }
    // tree

    const treeMoss1 = document.querySelector('#tile35');
    treeMoss1.classList.add('moss-img');
    const treeMoss2 = document.querySelector('#tile36');
    treeMoss2.classList.add('moss-img');
    const treeMoss3 = document.querySelector('#tile37');
    treeMoss3.classList.add('moss-img');
    const treeMoss4 = document.querySelector('#tile50');
    treeMoss4.classList.add('moss-img');
    const treeMoss5 = document.querySelector('#tile51');
    treeMoss5.classList.add('moss-img');
    const treeMoss6 = document.querySelector('#tile52');
    treeMoss6.classList.add('moss-img');
    const treeMoss7 = document.querySelector('#tile53');
    treeMoss7.classList.add('moss-img');
    const treeMoss8 = document.querySelector('#tile54');
    treeMoss8.classList.add('moss-img');

    const treeTrunk1 = document.querySelector('#tile68');
    treeTrunk1.classList.add('trunk-img');
    const treeTrunk2 = document.querySelector('#tile84');
    treeTrunk2.classList.add('trunk-img');

    // checked removing tile
    // const div = document.querySelector(`#tile${86}`);
    // div.classList.remove('dirt-tile');
}

function createInventory() {
    // inventory - elements and tools
    
    for (let i = 0; i < INV_TILES; i++) {
        const element = document.createElement("div");
        inventoryElementTiles.appendChild(element);
        element.classList.add("tile");
        element.classList.add("dark-tile");
        element.classList.add("tile-border");
        element.classList.add("scale");
        element.setAttribute("id", `element${i}`);
    }
    for (let i = 0; i < INV_TILES; i++) {
        const tool = document.createElement("div");
        inventoryToolTiles.appendChild(tool);
        tool.classList.add("tile");
        tool.classList.add("dark-tile");
        tool.classList.add("tile-border");
        tool.classList.add("scale");
        tool.setAttribute("id", `tool${i}`);
    }

    const element = document.querySelector("#element2");
    element.classList.add("apple-img");
    const axe = document.querySelector("#tool0");
    axe.classList.add("axe-img");
    const shovel = document.querySelector("#tool1");
    shovel.classList.add("shovel-img");
    
    shovel.addEventListener("click", () => {
        axe.style.border = '';
        shovel.style.border = 'solid 2px #89c4e0';
    });

    axe.addEventListener("click", ()=>{
        shovel.style.border = '';
        axe.style.border = 'solid 2px #89c4e0';

    });

    const resetClicked = document.querySelector('h2');
    resetClicked.addEventListener('click', () => {
        shovel.style.border = '';
        axe.style.border = '';
    })
    
}


function sky() {}
function dirt() {}

createGameBoard();
createInventory();
sky();
dirt();
// div.classList.add('tile-border');
