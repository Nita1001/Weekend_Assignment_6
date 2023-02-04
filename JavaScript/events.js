import { shovel, axe, pickAxe, apple } from "./InitialView.js";

export let currentTool = '';


// TODO separate the functions from events
shovel.addEventListener("click", () => {
    shovel.style.border = "solid 2px #89c4e0";
    axe.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentTool = 'shovel';
});

axe.addEventListener("click", () => {
    axe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentTool = 'axe';
});

pickAxe.addEventListener("click", () => {
    pickAxe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    axe.style.border = "";
    apple.style.border = "";
    currentTool = 'pickAxe';
});

apple.addEventListener("click", () => {
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentTool = 'Apple';
    // EAT?
    console.log('Apple');
});


const resetClicked = document.querySelector("h2");

resetClicked.addEventListener("click", () => {
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentTool = '';
});


