import { currentTool, currentElement } from "./events.js";
export let count = ["", "", 1, "", "", ""];

function updateInventory(i) {

    const header = document.querySelector(`#header${i}`);
    header.innerText = `${count[i]}`;

    if(count[i] === 0){
        const element = document.querySelector(`#element${i}`);
        console.log('i is', i);
        console.log('element is', `#element${i}`);
        switch(i){
            case 0:
                element.classList.remove('log-tile');
                header.innerText = '';
                break;
            case 1:
                element.classList.remove('moss-tile');
                header.innerText = '';
                break;
            case 2:
                element.classList.remove('apple-img');
                header.innerText = '';
                break;
            case 3:
                element.classList.remove('grass-tile');
                header.innerText = '';
                break;
            case 4:
                element.classList.remove('dirt-tile');
                header.innerText = '';
                break;
            case 5:
                element.classList.remove('stone-tile');
                header.innerText = '';
                break;
        }
    }
}

export function checkType(element) {

    const classList = element.target.classList;
    const id = element.target.id;

    if (classList.contains("trunk-tile") && currentTool === "axe") {
        classList.remove("trunk-tile");
        const trunk = document.querySelector("#element0");
        trunk.classList.add("log-tile");
        count[0]++;
        updateInventory(0);
    }
    if (classList.contains("moss-tile") && currentTool === "axe") {
        classList.remove("moss-tile");
        const moss = document.querySelector("#element1");
        moss.classList.add("moss-tile");
        count[1]++;
        updateInventory(1);
    }
    if (classList.contains("grass-tile") && currentTool === "shovel") {
        classList.remove("grass-tile");
        const grass = document.querySelector("#element3");
        grass.classList.add("grass-tile");
        count[3]++;
        updateInventory(3);
    }
    if (classList.contains("dirt-tile") && currentTool === "shovel") {
        classList.remove("dirt-tile");
        const dirt = document.querySelector("#element4");
        dirt.classList.add("dirt-tile");
        count[4]++;
        updateInventory(4);
    }
    if (classList.contains("stone-tile") && currentTool === "pickAxe") {
        classList.remove("stone-tile");
        const stone = document.querySelector("#element5");
        stone.classList.add("stone-tile");
        count[5]++;
        updateInventory(5);
    }

    if (classList.contains("sky-tile")) {
        switch (currentElement) {

            case "log":
                if(count[0] > 0){
                    classList.add("trunk-tile");
                    count[0]--;
                    updateInventory(0);
                }
                break;
            case "moss":
                if(count[1] > 0){
                    classList.add("moss-tile");
                    count[1]--;
                    updateInventory(1);
                }
                break;
            case "stone":
                if(count[5] > 0){
                    classList.add("stone-tile");
                    count[5]--;
                    updateInventory(5);
                }
                break;
            case "dirt":
                if(count[4] > 0){
                    classList.add("dirt-tile");
                    count[4]--;
                    updateInventory(4);
                }
                break;
            case "grass":
                if(count[3] > 0){
                    classList.add("grass-tile");
                    count[3]--;
                    updateInventory(3);
                }
                break;
            case "apple":
                if(count[2] > 0){
                    classList.add("apple-img");
                    count[2]--;
                    updateInventory(2);
                }
                break;
            default:
                return;
            
        }
    }
}
