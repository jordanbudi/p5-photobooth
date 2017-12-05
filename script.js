var capture;
var button;

function setup(){
    createCanvas(320,240);
    background(255,0,0);
    capture = createCapture(VIDEO);
    capture.size(320,240);
    button = createButton("Selfie!")
    button.mousePressed(activateCamera, saveCanvas);
}

function activateCamera(){
    image(capture, 0, 0, 320, 240);
    saveCanvas(capture, 'You-Ugly');
}