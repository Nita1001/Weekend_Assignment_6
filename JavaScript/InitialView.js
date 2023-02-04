import { checkType, count} from "./handleTools.js";

const TOTAL_TILES = 360; // 64px
const LAPTOP_TILES = 320; // 64px
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

function drawTree(headMoss, middleMoss, trunk) {
    // head moss
    const treeMoss1 = document.querySelector("#tile35");
    treeMoss1.classList.add("moss-tile");
    const treeMoss2 = document.querySelector("#tile36");
    treeMoss2.classList.add("moss-tile");
    const treeMoss3 = document.querySelector("#tile37");
    treeMoss3.classList.add("moss-tile");
    // middle moss
    const treeMoss4 = document.querySelector("#tile50");
    treeMoss4.classList.add("moss-tile");
    const treeMoss5 = document.querySelector("#tile51");
    treeMoss5.classList.add("moss-tile");
    const treeMoss6 = document.querySelector("#tile52");
    treeMoss6.classList.add("moss-tile");
    const treeMoss7 = document.querySelector("#tile53");
    treeMoss7.classList.add("moss-tile");
    const treeMoss8 = document.querySelector("#tile54");
    treeMoss8.classList.add("moss-tile");
    // trunk
    const treeTrunk1 = document.querySelector("#tile68");
    treeTrunk1.classList.add("trunk-tile");
    const treeTrunk2 = document.querySelector("#tile84");
    treeTrunk2.classList.add("trunk-tile");

}

function createGameBoard(total, stoneStart, stoneEnd, grassStart, grassEnd, dirtStart, dirtEnd, headMoss, middleMoss, trunk) {
    drawSky(total);
    drawStone(stoneStart, stoneEnd);
    drawGrass(grassStart, grassEnd);
    drawDirt(dirtStart, dirtEnd);
    drawTree(headMoss, middleMoss, trunk);
}

// Creating the inventory - for collected elements and tools

function InitialInventory(tileSize){

    for (let i = 0; i < INV_TILES; i++) {
        const element = document.createElement("div");
        inventoryElementTiles.appendChild(element);
        element.classList.add(`${tileSize}`);
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
        tool.classList.add(`${tileSize}`);
        tool.classList.add("dark-tile");
        tool.classList.add("tile-border");
        tool.classList.add("scale");
        tool.setAttribute("id", `tool${i}`);
    }

}


// check media query 
const mediaQueryMobile = '(max-width: 800px)';
const mediaQueryTablet = '(min-width: 801px) and (max-width: 1540px)'
// matched or not
let matchedMobile = window.matchMedia(mediaQueryMobile).matches;
let matchedTablet = window.matchMedia(mediaQueryTablet).matches;

if(matchedMobile) { // display this type of view
	console.log('Screen is under 800px');
// stoneStart, stoneEnd, grassStart, grassEnd, dirtStart, dirtEnd, headMoss, middleMoss, trunk
    createGameBoard(MOBILE_TILES, 112, 140, 200, 220, 110, 169, 0, 0, 0);
    InitialInventory('inv-tile');
} else if(matchedTablet) { // tablet type of view
    console.log('Screen is between 800px to 1540');
    createGameBoard(LAPTOP_TILES, 154, LAPTOP_TILES, 110, 130, 130, LAPTOP_TILES, 0, 0, 0);
    InitialInventory('inv-tile');
} else {
    console.log('Screen wider than 1540');
    createGameBoard(TOTAL_TILES ,300, TOTAL_TILES, 260, 280, 280, TOTAL_TILES, 0, 0, 0);
    InitialInventory('inv-tile');
}


// Inventory - Tools & collection

export const axe = document.querySelector("#tool0");
export const pickAxe = document.querySelector("#tool2");
export const shovel = document.querySelector("#tool1");
export const apple = document.querySelector("#element2");
apple.classList.add("apple-img");
axe.classList.add("axe-img");
pickAxe.classList.add("pickAxe-img");
shovel.classList.add("shovel-img");



