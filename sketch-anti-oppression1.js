
var contador = 0;
var dato = 1;
var rodatnoc = 0;
var otad = 1;
let hue = 0;

// noise field -

var ruido_inc = 0.0014;
var density = 140;
var znoise = 0.0;

// offset

var angle = 0.0;
var speed = 0.0002;
var radius = 500.0;

// offset1

var angle1 = 0.0;
var speed1 = 0.00004;
var radius1 = 400.0;

var sx1 = 3.0;
var sy1 = 1.5;


function setup() {

    createCanvas(windowWidth, windowHeight*5.8);

}

function draw() {

    // 

    angle += speed;
    angle1 += speed1;


    hue = ++hue % 255;

    push();
    noiseField();
    pop();
}

function noiseField() {
    // noise field _
    push();

    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 188;
            noStroke();
            //fill(contador, n, contador);
            //fill(50, n, 200);
            //fill(contador + 20, 158, n*2);
            fill(n, 194, 230);
//188, 194, 230
            rect(x, y, density, density);
            xnoise += ruido_inc;
        }
        xnoise += ruido_inc;
        ynoise += ruido_inc;
    }
    znoise += ruido_inc;
}
