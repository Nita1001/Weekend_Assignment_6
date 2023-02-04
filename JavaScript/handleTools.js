import { currentTool } from "./events.js";
export let count = ['', '', 1, '', '', '']


function updateInventory(id, i){
    const header = document.querySelector(`#header${i}`);
    header.innerText = `${count[i]}`;
}

export function checkType(element) {
    const classList = element.target.classList;
    const id = element.target.id;
    if (classList.contains("trunk-img") && currentTool === "axe") {
        classList.remove("trunk-img");
        const trunk = document.querySelector("#element0");
        trunk.classList.add("log-img");
        count[0]++;
        updateInventory(id, 0);

    }
    if (classList.contains("moss-img") && currentTool === "axe") {
        classList.remove("moss-img");
        const moss = document.querySelector("#element1");
        moss.classList.add("moss-img");
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
    if (classList.contains("stone-img") && currentTool === "pickAxe") {
        classList.remove("stone-img");
        const rock = document.querySelector("#element5");
        rock.classList.add("stone-img");
        count[5]++;
        updateInventory(id, 5);

    }

}

