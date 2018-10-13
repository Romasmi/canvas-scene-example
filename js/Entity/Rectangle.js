class Rectangle {
    constructor({
                    x,
                    y,
                    width,
                    height,
                    fillColor,
                    strokeColor
                }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }

    draw(ctx) {
        if (ctx === undefined) {
            return false;
        }

        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.strokeColor !== undefined) {
            ctx.strokeColor = this.strokeColor;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}
