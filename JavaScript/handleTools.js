import { currentTool } from "./events.js";

export function checkType(element) {
    const classList = element.target.classList;
    const id = element.target.id;
    if (classList.contains("trunk-img") && currentTool === "axe") {
        classList.remove("trunk-img");
        const trunk = document.querySelector("#element0");
        trunk.classList.add("log-img");
    }
    if (classList.contains("moss-img") && currentTool === "axe") {
        classList.remove("moss-img");
        const moss = document.querySelector("#element1");
        moss.classList.add("moss-img");
    }
    if (classList.contains("grass-tile") && currentTool === "shovel") {
        classList.remove("grass-tile");
        const grass = document.querySelector("#element3");
        grass.classList.add("grass-img");
    }
    if (classList.contains("dirt-tile") && currentTool === "shovel") {
        classList.remove("dirt-tile");
        const dirt = document.querySelector("#element4");
        dirt.classList.add("dirt-tile");
    }
    if (classList.contains("stone-tile") && currentTool === "pickAxe") {
        classList.remove("stone-tile");
        const rock = document.querySelector("#element0");
        rock.classList.add("stone-img");
    }
}
