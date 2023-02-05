import { shovel, axe, pickAxe, apple } from "./InitialView.js";
import { count } from "./handleTools.js"
export let currentTool = '';
export let currentElement = '';


// TODO separate the functions from events
shovel.addEventListener("click", () => {
    shovel.classList.add('clicked-border');
    axe.classList.remove('clicked-border');
    pickAxe.classList.remove('clicked-border');
    apple.classList.remove('clicked-border');
    currentElement = '';
    currentTool = 'shovel';
});

axe.addEventListener("click", () => {
    axe.classList.add('clicked-border');
    shovel.classList.remove('clicked-border');
    pickAxe.classList.remove('clicked-border');
    apple.classList.remove('clicked-border');
    currentElement = '';
    currentTool = 'axe';
});

pickAxe.addEventListener("click", () => {
    pickAxe.classList.add('clicked-border');
    axe.classList.remove('clicked-border');
    shovel.classList.remove('clicked-border');
    apple.classList.remove('clicked-border');
    currentElement = '';
    currentTool = 'pickAxe';
});


const resetClicked = document.querySelector("h2");
resetClicked.addEventListener("click", () => {
    shovel.classList.remove('clicked-border');
    axe.classList.remove('clicked-border');
    pickAxe.classList.remove('clicked-border');
    apple.classList.remove('clicked-border');
    currentTool = '';
    currentElement = '';
});

const log = document.querySelector('#element0');
const moss = document.querySelector('#element1');
const grass = document.querySelector('#element3');
const dirt = document.querySelector('#element4');
const stone = document.querySelector('#element5');

apple.addEventListener("click", () => {
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentElement = 'Apple';
    // EAT?
});

log.addEventListener('click', () => {
    if(count[0] > 0){
        currentTool = '';
        currentElement ='log';
    }
});

moss.addEventListener('click', () => {
    if(count[1] > 0){
        currentTool = '';
        currentElement ='moss';
    }
})
grass.addEventListener('click', () => {
    if(count[3] > 0){
        currentTool = '';
        currentElement ='grass';
    }
})
dirt.addEventListener('click', () => {
    if(count[4] > 0){
        currentTool = '';
        currentElement ='dirt';
    }
})

stone.addEventListener('click', () => {
    if(count[5] > 0){
        currentTool = '';
        currentElement ='stone';
    }
})

