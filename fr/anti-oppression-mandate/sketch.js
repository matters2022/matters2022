let img2;
let img3;

var num = 100;
var num2 = 120;

let x = [];
let y = [];
var indexPosition = 0;

let x2 = [];
let y2 = [];
var indexPosition2 = 0;

let fr = 12;

function preload() {
    img2 = loadImage("../../img/shape4.svg");
    img3 = loadImage("../../img/shape4.svg");

}


function setup() {

    createCanvas(windowWidth, windowHeight * 4);
    ton_w = width;
    frameRate(fr);

}


function draw() {


    // 229, 191, 217
    background(188, 194, 230);
//BCC2E6
    //translate(width / 2, height / 2);
    //tint(255, 255, 255, 126);
    
    push();
    translate(-150, -100);
    ton_ocelotl();
    pop();

    push();
    translate(-150, 0);
    ton_forma_tres();
    pop();
}

function ton_ocelotl() {

    var ruidoX = 0.00059;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = -0.00049;
    var posY = noise(millis() * ruidoY) * height;

    x[indexPosition] = posX;
    y[indexPosition] = posY;

    indexPosition = (indexPosition + 1) % num;
    for (var i = 0; i < num; i++) {
        var pos = (indexPosition + i) % num;
        var radius = (num - i);
        //ellipse(x[pos], y[pos], radius, radius);
        image(img2, x[pos], y[pos], radius, radius);
    }
}

function ton_forma_tres() {

    var ruidoX2 = 0.00029;
    var posX2 = noise(millis() * ruidoX2) * width + 80;

    var ruidoY2 = 0.000009;
    var posY2 = noise(millis() * ruidoY2) * height;

    x2[indexPosition2] = posX2;
    y2[indexPosition2] = posY2;

    indexPosition2 = (indexPosition2 + 1) % num2;
    for (var i = 0; i < num2; i++) {
        var pos2 = (indexPosition2 + i) % num2;
        var radius2 = (num2 - i);
        //ellipse(x[pos], y[pos], radius, radius);
        image(img3, x[pos2], y[pos2], radius2, radius2);
    }
}


/*

function ton_ocelotl() {
    imageMode(CENTER);

    var ruidoScale1 = 0.0001
    var ruido_scale1 = noise(millis() * ruidoScale1) * 300;

    tint(255, 255, 255, 126);
    image(img2, 0, 0, 100 + ruido_scale1, 100 + ruido_scale1);
}

*/