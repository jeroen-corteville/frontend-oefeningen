document.addEventListener("DOMContentLoaded", function () {
    var oCanvas = new Canvas("canvas", null, null, "#eee");

    canvasApp(oCanvas);
});

function canvasApp(oCanvas) {
    var oBall = new Ball(oCanvas.ctx, "ball1", 50, 50, 15, null, null)
    oBall.drawOneBall();
}