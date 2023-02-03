import { shovel, axe, pickAxe, apple } from "./InitialView.js";
let currentTool = '';

shovel.addEventListener("click", () => {
    shovel.style.border = "solid 2px #89c4e0";
    axe.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentTool = 'shovel';
    console.log(currentTool);
});

axe.addEventListener("click", () => {
    axe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentTool = 'axe';
    console.log(currentTool);
});

pickAxe.addEventListener("click", () => {
    pickAxe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    axe.style.border = "";
    apple.style.border = "";
    currentTool = 'pickAxe';
    console.log(currentTool);
});


apple.addEventListener("click", () => {
    apple.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentTool = 'Apple';
    console.log('Apple');
});


const resetClicked = document.querySelector("h2");

resetClicked.addEventListener("click", () => {
    shovel.style.border = "";
    axe.style.border = "";
    pickAxe.style.border = "";
    currentTool = '';
});


export function checkType(element){
    let classList = element.target.classList;
    if (classList.contains("trunk-img") && currentTool === "axe") {
        console.log(element);
      classList.remove("trunk-img");
    }
    if (classList.contains("moss-img") && currentTool === "axe") {
      classList.remove("moss-img");
    }
    if (classList.contains("rock-tile") && currentTool === "pickAxe") {
      classList.remove("rock-tile");
    }
    if (classList.contains("grass-tile") && currentTool === "shovel") {
      classList.remove("grass-tile");
    }
    if (classList.contains("dirt-tile") && currentTool === "shovel") {
      classList.remove("dirt-tile");
    }
}



 // check removing tile with shovel
    // const div = document.querySelector(`#tile${86}`);
    // div.classList.remove('dirt-tile');
    

