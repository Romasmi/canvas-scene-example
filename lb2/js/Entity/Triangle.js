class Triangle {
    constructor({
                    x1,
                    y1,
                    x2,
                    y2,
                    x3,
                    y3,
                    fillColor,
                }) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.fillColor = fillColor;
    }

    draw(ctx) {
        if (ctx === undefined) {
            return false;
        }

        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x3, this.y3);
        ctx.closePath();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}
