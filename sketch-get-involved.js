let img2;
let img3;

var num = 160;
var num3 = 100;

let x = [];
let y = [];
var indexPosition = 0;

let x3 = [];
let y3 = [];
var indexPosition3 = 0;

let fr = 12;

function preload() {
    img5 = loadImage("../img/shape5-01.svg");
    img4 = loadImage("../img/shape4-01.svg");

}


function setup() {

    createCanvas(windowWidth, windowHeight * 2.5);
    ton_w = width;
    frameRate(fr);

}


function draw() {


    // 229, 191, 217
    background(229, 191, 217);

    //translate(width / 2, height / 2);
    //tint(255, 255, 255, 126);
    push();
    translate(-150, -200);
    ton_ocelotl();
    pop();

    push();
    translate(-50, -300);
    ton_forma_tres();
    pop();
}

function ton_ocelotl() {

    var ruidoX = 0.001;
    var posX = noise(millis() * ruidoX) * width + 120;

    var ruidoY = -0.0029;
    var posY = noise(millis() * ruidoY) * height;

    x[indexPosition] = posX;
    y[indexPosition] = posY;

    indexPosition = (indexPosition + 1) % num;
    for (var i = 0; i < num; i++) {
        var pos = (indexPosition + i) % num;
        var radius = (num - i) / 2;
        //ellipse(x[pos], y[pos], radius, radius);
        image(img5, x[pos], y[pos], radius, radius);
    }
}

function ton_forma_tres() {

    var ruidoX3 = 0.001;
    var posX3 = noise(millis() * ruidoX3) * width + 60;

    var ruidoY3 = 0.0021;
    var posY3 = noise(millis() * ruidoY3) * height;

    x3[indexPosition3] = posX3;
    y3[indexPosition3] = posY3;

    indexPosition3 = (indexPosition3 + 1) % num3;
    for (var i = 0; i < num3; i++) {
        var pos3 = (indexPosition3 + i) % num3;
        var radius3 = (num3 - i) / 2;
        image(img4, x3[pos3], y3[pos3], radius3, radius3);
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