import { shovel, axe, pickAxe, apple } from "./InitialView.js";
import { count } from "./handleTools.js"
export let currentTool = '';
export let currentElement = '';


// TODO separate the functions from events
shovel.addEventListener("click", () => {
    shovel.style.border = "solid 2px #89c4e0";
    axe.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentElement = '';
    currentTool = 'shovel';
    console.log('tool', currentTool);
    console.log('element', currentElement);


});

axe.addEventListener("click", () => {
    axe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentElement = '';
    currentTool = 'axe';
    console.log('tool', currentTool);
    console.log('element', currentElement);
});

pickAxe.addEventListener("click", () => {
    pickAxe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    axe.style.border = "";
    apple.style.border = "";
    currentElement = '';
    currentTool = 'pickAxe';
    console.log('tool', currentTool);
    console.log('element', currentElement);
});

apple.addEventListener("click", () => {
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentElement = 'Apple';
    // EAT?
    console.log('element', currentElement);
});




const resetClicked = document.querySelector("h2");

resetClicked.addEventListener("click", () => {
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentTool = '';
    currentElement = '';
});

const log = document.querySelector('#element0');
const moss = document.querySelector('#element1');
const grass = document.querySelector('#element3');
const dirt = document.querySelector('#element4');
const stone = document.querySelector('#element5');

log.addEventListener('click', () => {
    if(count[0] > 0){
        currentTool = '';
        currentElement ='log';
        console.log(currentElement);
    }
  
});

moss.addEventListener('click', () => {
    if(count[1] > 0){
        currentTool = '';
        currentElement ='moss';
        console.log(currentElement);
    }
})
grass.addEventListener('click', () => {
    if(count[3] > 0){
        currentTool = '';
        currentElement ='grass';
        console.log(currentElement);
    }
})
dirt.addEventListener('click', () => {
    if(count[4] > 0){
        currentTool = '';
        currentElement ='dirt';
        console.log(currentElement);
    }
})

stone.addEventListener('click', () => {
    if(count[5] > 0){
        currentTool = '';
        currentElement ='stone';
        console.log(currentElement);
    }
})
