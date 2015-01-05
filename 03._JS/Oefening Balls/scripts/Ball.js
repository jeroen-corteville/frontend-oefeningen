function Ball(ctx, id, x, y, radius, speed, angle) {
    this.ctx = ctx;
    this.id = id;
    this.x = x ? x : Math.floor(Math.random() * this.context.canvas.width);
    this.y = y ? y: Math.floor(Math.random() * this.context.canvas.height);
    this.radius = radius ? radius: Math.floor(Math.random()*20);
    this.speed = speed ? speed : null;
    this.angle = angle ? angle : null;

    this.rgb = "red";

    var self = this;
    
    this.ctx.canvas.addEventListener('click', function (e) {
        return self.onClick(e);
    })
}

Ball.prototype = {

    //get context() {
    //    return this.ctx;
    //},
    get RandomColor(){
        return "rgb(" + Math.floor(Math.random() *255) + ", " +
                        Math.floor(Math.random() *255) + ", " +
                        Math.floor(Math.random() *255) + ")"
    },
    drawOneBall: function (ball) {
        ball = ball ? ball: this;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 1.5 * Math.PI, false);
        this.ctx.fillStyle = this.rgb;
        this.ctx.fill();
        this.ctx.closePath();
        console.log(ball);
        //console.log("Cirkel getekend");
    },

    onClick: function (e) {
        if ((e.x > this.x - this.radius) && (e.x < this.x +this.radius)&&
            (e.y > this.y - this.radius) && (e.y < this.y +this.radius)) {
            this.drawOneBall(new Ball(this.ctx, "ball2", 100, 100, 15, null, null));
        }
    }
}