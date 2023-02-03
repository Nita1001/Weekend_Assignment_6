
let container = document.querySelector('#tiles-container');
const TOTAL_TILES = 120;

for(let i = 0; i < TOTAL_TILES; i++)
{
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('tile');
    div.setAttribute('id', `tile${i}`);
}