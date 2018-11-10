class Ellipse {
    constructor({
                    position,
                    rX,
                    rY,
                    fillColor,
                    rotation
                }) {
        this.position = position;
        this.rX = rX;
        this.rY = rY;
        this.fillColor = fillColor;
        this.rotation = rotation;
    }

    draw(ctx) {
        if (ctx === undefined) {
            return false;
        }

        ctx.beginPath();
        ctx.ellipse(
            this.position.x,
            this.position.y,
            this.rX,
            this.rY,
            0,
            0,
            2 * Math.PI,
            false
        );
        ctx.closePath();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}
