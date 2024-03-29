const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const functions = {
    sqr: x =>  canvas.height - 40 * (x / 40)**2,
    cube: x => canvas.height / 2 - 40 * (x / 40)**3,
    sin: x => canvas.height / 2 - 40 * Math.sin(x / 40),
    cos: x => canvas.height / 2 - 40 * Math.cos(x / 40),
};

let selected;
let color = document.getElementById('color').value;

function drawGraph() {

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color; // Set stroke color
    for(let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01)
    {
        let y = functions[selected](x);
        ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
    }

}

document.querySelectorAll('input[name="func"]')
    .forEach(radio => {

        radio.addEventListener('change', () => {

            selected = radio.id;
            drawGraph();

        });
    });

document.getElementById('color')
    .addEventListener('change', () => {
        color = document.getElementById('color').value;
        if (selected)
            drawGraph();
    });
    