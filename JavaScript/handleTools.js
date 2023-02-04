import { currentTool, currentElement } from "./events.js";
export let count = ["", "", 1, "", "", ""];

function updateInventory(id, i) {
    const header = document.querySelector(`#header${i}`);
    header.innerText = `${count[i]}`;
}

export function checkType(element) {
    const classList = element.target.classList;
    const id = element.target.id;
    if (classList.contains("trunk-tile") && currentTool === "axe") {
        classList.remove("trunk-tile");
        const trunk = document.querySelector("#element0");
        trunk.classList.add("log-tile");
        count[0]++;
        updateInventory(id, 0);
    }
    if (classList.contains("moss-tile") && currentTool === "axe") {
        classList.remove("moss-tile");
        const moss = document.querySelector("#element1");
        moss.classList.add("moss-tile");
        count[1]++;
        updateInventory(id, 1);
    }
    if (classList.contains("grass-tile") && currentTool === "shovel") {
        classList.remove("grass-tile");
        const grass = document.querySelector("#element3");
        grass.classList.add("grass-tile");
        count[3]++;
        updateInventory(id, 3);
    }
    if (classList.contains("dirt-tile") && currentTool === "shovel") {
        classList.remove("dirt-tile");
        const dirt = document.querySelector("#element4");
        dirt.classList.add("dirt-tile");
        count[4]++;
        updateInventory(id, 4);
    }
    if (classList.contains("stone-tile") && currentTool === "pickAxe") {
        classList.remove("stone-tile");
        const stone = document.querySelector("#element5");
        stone.classList.add("stone-tile");
        count[5]++;
        updateInventory(id, 5);
    }
    console.log(classList);
    if (classList.contains("sky-tile")) {
        switch (currentElement) {
            case "log":
                if(count[0] > 0){
                    classList.add("trunk-tile");
                    count[0]--;
                    updateInventory(id, 0);
                }
                
                break;
            case "moss":
                if(count[1] > 0){
                    classList.add("moss-tile");
                    count[1]--;
                    updateInventory(id, 1);
                }
                break;
            case "stone":
                if(count[5] > 0){
                    classList.add("stone-tile");
                    count[5]--;
                    updateInventory(id, 5);
                }
                break;
            case "dirt":
                if(count[4] > 0){
                    classList.add("dirt-tile");
                    count[4]--;
                    updateInventory(id, 4);
                }
                break;
            case "grass":
                if(count[3] > 0){
                    classList.add("dirt-tile");
                    count[3]--;
                    updateInventory(id, 3);
                }
                break;
            case "apple":
                if(count[2] > 0){
                    classList.add("apple-img");
                    count[2]--;
                    updateInventory(id, 2);
                }
                break;
            default:
                console.log('something went wrong');
        }
        
    }
}
