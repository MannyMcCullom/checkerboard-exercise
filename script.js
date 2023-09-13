function changeOdd(oddRow) {
    if (oddRow === true) {
        oddRow = false;
    } else {
        oddRow = true;
    }
}
const container = document.createElement('div');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "1000px";
container.style.height = "1000px";
container.style.border = "5px solid black";
document.body.append(container);

let oddRow = true;
let count = 0;

for (let i = 0; i < 64; i++) {
    const tile = document.createElement('div');
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';
    if (oddRow === true) {
        if (i % 2 === 0) {
            tile.style.background = 'red';
        } else {
            tile.style.background = 'black';
        }
    } if (oddRow === false) {
        if (i % 2 === 0) {
            tile.style.background = 'black';
        } else {
            tile.style.background = 'red';
        }
    }
    console.log(oddRow);
    count++;
    while (count >= 8) {
        if (oddRow === true) {
            oddRow = false;
        } else {
            oddRow = true;
        }
        count = 0
    }
    container.append(tile);
    }