import { checkType, count} from "./handleTools.js";

const TOTAL_TILES = 364; // 64px
const LAPTOP_TILES = 512; // 64px
const MOBILE_TILES = 228; // 32px
const INV_TILES = 6;

let container = document.querySelector("#tiles-container");
const inventoryElementTiles = document.querySelector("#elements-grid");
const inventoryToolTiles = document.querySelector("#tools-grid");


function drawSky(total){

    for (let i = 0; i < total; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("tile");
        div.classList.add("sky-tile");
        div.setAttribute("id", `tile${i}`);
        div.addEventListener("click", (element) => {
            checkType(element);
        });
    }
}

function drawStone(start, end){

    for (let i = start; i < end; i++) {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add("stone-tile");
    }
}

function drawGrass(start, end){

    for (let i = start; i < end; i++) {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add("grass-tile");
    }
}

function drawDirt(start, end = TOTAL_TILES ){

    for (let i = start; i < end ; i++) {
        const div = document.querySelector(`#tile${i}`);
        div.classList.add("dirt-tile");
    }
}

function drawTree(moss, cols , trunk) {
    // top
    for(let i = moss ; i < moss + 3; i++){
        const treeMoss = document.querySelector(`#tile${i}`);
        treeMoss.classList.add("moss-tile");
    }
    // middle moss
    for(let i = moss + cols - 1 ; i < moss + cols + 4 ; i++){
        const treeMoss = document.querySelector(`#tile${i}`);
        treeMoss.classList.add("moss-tile");
    }
    for(let i = moss + (cols * 2) - 1 ; i < moss + (cols * 2) + 4 ; i++){
        const treeMoss = document.querySelector(`#tile${i}`);
        treeMoss.classList.add("moss-tile");
    }
    // trunk
    for(let i = trunk ; i <= trunk + (cols * 2) ; i += cols){
        const treeMoss1 = document.querySelector(`#tile${i}`);
        treeMoss1.classList.add("trunk-tile");
    }
}
function drawSun(start, col){
    
    const sun0 = document.querySelector(`#tile${start}`);
    sun0.classList.add("sun-tile");
    const sun1 = document.querySelector(`#tile${start - 1}`);
    sun1.classList.add("sun-tile");
    const sun2 = document.querySelector(`#tile${start + 1}`);
    sun2.classList.add("sun-tile");
    const sun3 = document.querySelector(`#tile${start - col}`);
    sun3.classList.add("sun-tile");
    const sun4 = document.querySelector(`#tile${start + col}`);
    sun4.classList.add("sun-tile");
    const a1 = document.querySelector(`#tile${start + col - 1}`);
    a1.classList.add('sun-light');
    const a2 = document.querySelector(`#tile${start + col + 1}`);
    a2.classList.add('sun-light');
    const a3 = document.querySelector(`#tile${start - col - 1}`);
    a3.classList.add('sun-light');
    const a4 = document.querySelector(`#tile${start - col + 1}`);
    a4.classList.add('sun-light');
}
function InitialInventory(){

    for (let i = 0; i < INV_TILES; i++) {
        const element = document.createElement("div");
        inventoryElementTiles.appendChild(element);
        element.classList.add('inv-tile');
        element.classList.add("dark-tile");
        element.classList.add("tile-border");
        element.classList.add("scale");
        element.setAttribute("id", `element${i}`);
        const header = document.createElement('h3');
        header.setAttribute("id", `header${i}`);
        element.appendChild(header);
        header.innerText = `${count[i]}`;
    }
    for (let i = 0; i < INV_TILES; i++) {
        const tool = document.createElement("div");
        inventoryToolTiles.appendChild(tool);
        tool.classList.add('inv-tile');
        tool.classList.add("dark-tile");
        tool.classList.add("tile-border");
        tool.classList.add("scale");
        tool.setAttribute("id", `tool${i}`);
    }

}

function createGameBoard(total, stoneStart, stoneEnd, grassStart, grassEnd, dirtStart, dirtEnd, headMoss, cols, trunk, sunStart) {
    drawSky(total);
    drawStone(stoneStart, stoneEnd);
    drawGrass(grassStart, grassEnd);
    drawDirt(dirtStart, dirtEnd);
    drawTree(headMoss, cols, trunk);
    drawSun(sunStart, cols);
    InitialInventory();
}


// check media query 
const mediaQueryMobile = '(max-width: 800px)';
const mediaQueryTablet = '(min-width: 801px) and (max-width: 1540px)'
// matched or not
let matchedMobile = window.matchMedia(mediaQueryMobile).matches;
let matchedTablet = window.matchMedia(mediaQueryTablet).matches;

if(matchedMobile) { // display this type of view
	console.log('Screen is under 800px');
    createGameBoard(MOBILE_TILES, 180, MOBILE_TILES, 144, 156, 156, MOBILE_TILES, 74, 12, 111, 33 );
} else if(matchedTablet) { // tablet type of view
    console.log('Screen is between 800px to 1540');
    createGameBoard(LAPTOP_TILES, 416, LAPTOP_TILES, 320, 352, 352, LAPTOP_TILES, 149, 32, 246, 69);
} else { // Wide Desktop
    console.log('Screen wider than 1540');
    createGameBoard(TOTAL_TILES ,308, TOTAL_TILES, 252, 280, 280, TOTAL_TILES, 87, 28, 172, 79);
}



// Initial Inventory - Tools & collection
export const axe = document.querySelector("#tool0");
export const pickAxe = document.querySelector("#tool2");
export const shovel = document.querySelector("#tool1");
export const apple = document.querySelector("#element2");
apple.classList.add("apple-img");
axe.classList.add("axe-img");
pickAxe.classList.add("pickAxe-img");
shovel.classList.add("shovel-img");
