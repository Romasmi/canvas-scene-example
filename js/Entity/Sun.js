class Sun {
    constructor({
                    x,
                    y,
                    radius,
                    fillColor
                }) {
        this.x = x;
        this.y = y;
        this.rX = radius;
        this.rY = radius;
        this.fillColor = fillColor;

        this.body = new Ellipse
        ({
            x: this.x,
            y: this.y,
            fillColor: this.fillColor,
            rX: this.rX,
            rY: this.rY
        });
    }

    draw(ctx) {
        this.body.draw(ctx);
    }
}
