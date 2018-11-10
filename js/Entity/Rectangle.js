class Rectangle {
    constructor({
                    position,
                    width,
                    height,
                    fillColor,
                    strokeColor
                }) {
        this.position = position;
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
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        if (this.strokeColor !== undefined) {
            ctx.strokeColor = this.strokeColor;
            ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}
