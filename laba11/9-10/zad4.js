

// Select canvas element
const $canvas = $('#canvas');

// Get context
const ctx = $canvas[0].getContext('2d');

// Cache width/height
const width = $canvas.width();
const height = $canvas.height();

// Functions map
const functions = {
    sqr: x =>  height - 40 * (x / 40)**2,
    cube: x => height / 2 - 40 * (x / 40)**3,
    sin: x => height / 2 - 40 * Math.sin(x / 40),
    cos: x => height / 2 - 40 * Math.cos(x / 40),
}

let selected;
let color;

// Draw graph
function draw() {

    ctx.clearRect(0, 0, width, height);

    if (!color)
        color = $('#color')[0].value;

    ctx.fillStyle = color;

    for(let x = -width / 2; x < width / 2; x += 0.01) {

        let y = functions[selected](x);

        ctx.fillRect(x + width / 2 - 0.5, y - 0.5, 1, 1);
    }

}

// Radio change handler
$('input[name="func"]').change(function() {

    selected = this.id;

    draw();

});

// Color change handler
$('#color').change(function() {

    color = this.value;

    if(selected) draw();

});