let angle = 0


function setup() {
    createCanvas(windowWidth, windowHeight * 2)
    angleMode(DEGREES)

}

function draw() {


    var back = color('#C2BCB0')
    var c = color('#CEF7D4')
    var c1 = color('#ebb22a')
    var c2 = color('#4860BA')
    var c3 = color('#FF5050')


    //background(255, 170, 0);


    //background(back)

    push()


    var ruidoXB2 = 0.00006
    var ruido_x_horizontal2 = noise(millis() * ruidoXB2) * 400

    var ruidoYB2 = 0.00001
    var ruido_y_vertical2 = noise(millis() * ruidoXB2) * 205

    var ruidoScale1 = 0.00001
    var ruido_scale1 = noise(millis() * ruidoScale1) * 4

    var ruidoScale2 = 0.00006
    var ruido_scale2 = noise(millis() * ruidoScale2) * 2.5

    push()
    scale(ruido_scale1)
    translate(0, 0)
    rotate(-angle)
    noStroke()
    fill(c1)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    push()
    scale(ruido_scale2)
    translate(ruido_x_horizontal2, ruido_y_vertical2)
    rotate(angle * -2)
    noStroke()
    fill(c2)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    push()
    scale(ruido_scale2)
    translate(500, 30)
    rotate(-angle)
    noStroke()
    fill(c)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    push()
    scale(ruido_scale1)
    translate(0, height / 4)
    rotate(angle)
    noStroke()
    fill(c3)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    pop()


    push()

    translate(width / 2, height / 2)

    var ruidoXB2 = 0.00006
    var ruido_x_horizontal2 = noise(millis() * ruidoXB2) * 400

    var ruidoYB2 = 0.00001
    var ruido_y_vertical2 = noise(millis() * ruidoXB2) * 205

    var ruidoScale1 = 0.00001
    var ruido_scale1 = noise(millis() * ruidoScale1) * 4

    var ruidoScale2 = 0.00006
    var ruido_scale2 = noise(millis() * ruidoScale2) * 2.5

    push()
    scale(ruido_scale1)
    translate(0, 0)
    rotate(-angle)
    noStroke()
    fill(c1)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    push()
    scale(ruido_scale2)
    translate(ruido_x_horizontal2, ruido_y_vertical2)
    rotate(angle * -2)
    noStroke()
    fill(c2)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    push()
    scale(ruido_scale2)
    translate(500, 30)
    rotate(-angle)
    noStroke()
    fill(c)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    push()
    scale(ruido_scale1)
    translate(0, height / 4)
    rotate(angle)
    noStroke()
    fill(c3)
    teru(0.0001, 0, 0.000001, 0)
    pop()

    pop()


    angle = angle + 0.12;

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight * 2)
}


function teru(ruido, detalle, ruido2, detalle2) {
    var ruidoX = ruido
    var ruido_x = noise(millis() * ruidoX) * detalle

    var ruidoS = ruido2
    var ruido_s = noise(millis() * ruidoS) * detalle2

    // rect(0, 0, hola, ruido_x);
    beginShape()
    vertex(26, 161 + ruido_s)
    vertex(103, 66)
    vertex(225, 25)
    vertex(327, 66)
    vertex(364, 93 + ruido_s)
    vertex(423, 161)
    vertex(406, 248 + ruido_x)
    vertex(368, 337)
    vertex(327, 337 + ruido_s)
    vertex(266, 279)
    vertex(285, 192)
    vertex(241, 133)
    vertex(197, 148 + ruido_s)
    vertex(147, 223)
    endShape()
}

function teru1(ruido, detalle, ruido2, detalle2) {
    var ruidoX = ruido
    var ruido_x = noise(millis() * ruidoX) * detalle

    var ruidoS = ruido2
    var ruido_s = noise(millis() * ruidoS) * detalle2

    // rect(0, 0, hola, ruido_x);
    beginShape()
    vertex(80, 0 + ruido_s)
    vertex(189, 100 + ruido_s)
    vertex(189, 0 + ruido_x)
    vertex(80, -100 + ruido_x)
    endShape()
}