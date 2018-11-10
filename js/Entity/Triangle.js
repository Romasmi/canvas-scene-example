class Triangle {
    constructor({
                    position1,
                    position2,
                    position3,
                    fillColor,
                }) {
        this.position1 = position1;
        this.position2 = position2;
        this.position3 = position3;
        this.fillColor = fillColor;
    }

    draw(ctx) {
        if (ctx === undefined) {
            return false;
        }

        ctx.beginPath();
        ctx.moveTo(this.position1.x, this.position1.y);
        ctx.lineTo(this.position2.x, this.position2.y);
        ctx.lineTo(this.position3.x, this.position3.y);
        ctx.closePath();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}
