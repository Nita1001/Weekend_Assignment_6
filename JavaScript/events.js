
let currentTool = '';

shovel.addEventListener("click", () => {
    shovel.style.border = "solid 2px #89c4e0";
    axe.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentTool = 'shovel';
    console.log('shovel');
});

axe.addEventListener("click", () => {
    axe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    pickAxe.style.border = "";
    apple.style.border = "";
    currentTool = 'axe';
    console.log('axe');
});

pickAxe.addEventListener("click", () => {
    pickAxe.style.border = "solid 2px #89c4e0";
    shovel.style.border = "";
    axe.style.border = "";
    apple.style.border = "";
    currentTool = 'pickAxe';
    console.log('axe');
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



 // check removing tile with shovel
    // const div = document.querySelector(`#tile${86}`);
    // div.classList.remove('dirt-tile');
    

