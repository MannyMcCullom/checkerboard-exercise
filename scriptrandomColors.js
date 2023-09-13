const container = document.createElement('div');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.border = "5px solid black";
document.body.append(container);

// let oddRow = true;
let random = true;
let count = 0;

for (let i = 0; i < 64; i++) {

    const tile = document.createElement('div');
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    // if (oddRow === true) {
    //     if (i % 2 === 0) {
    //         tile.style.background = 'red';
    //     } else {
    //         tile.style.background = 'black';
    //     }
    // } if (oddRow === false) {
    //     if (i % 2 === 0) {
    //         tile.style.background = 'black';
    //     } else {
    //         tile.style.background = 'red';
    //     }
    // }

    if (random = true) {
        tile.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
        console.log('t');
    }

    // count++;

    while (count >= 8) {
        if (oddRow === true) {
            oddRow = false;
        } else {
            oddRow = true;
        }
        count = 0;
    }

    container.append(tile);

    }