// JavaScript source code
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var t = text();
var lines = [];
window.setInterval(draw, 100);
function draw() {
    alert("in draw");
    if (Math.floor(Math.random() * 2) === 0 && lines.length < 100) {
        lines.push(new textLine());
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(function (tl) {
        ctx.drawImage(tl.text, tl.posX, tl.animate(), 20, 1000);
    });
}
function textLine() {
    alert("in textLine");
    this.text = t;
    this.posX = Math.floor(Math.random() * canvas.width);
    this.offsetY = -1000;
    this.animate = function () {
        if (this.offsetY >= 0) {
            this.offsetY = -1000;
        }
        this.offsetY += 10;
        return this.offsetY;
    };
}
function text() {
    alert("in text");
    var offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = "30";
    offscreenCanvas.height = "1000";
    offscreenCanvas.style.display = "none";
    document.body.appendChild(offscreenCanvas);
    var octx = offscreenCanvas.getContext("2d");
    octx.textAlign = "center";
    octx.shadowColor = "lightgreen";
    octx.shadowOffsetX = 2;
    octx.shadowOffsetY = -5;
    octx.shadowBlur = 1;
    octx.fillStyle = "darkgreen";
    octx.textAlign = "left";
    var step = 10;
    for (i = 0; i < 100; i++) {
        var charCode = 0;
        while (charCode < 60) {
            charCode = Math.floor(Math.random() * 100);
        }
        octx.fillText(String.fromCharCode(charCode), 0, step);
        step += 10;
    }
    return offscreenCanvas;
}