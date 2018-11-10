class Sun {
    constructor({
        position,
                    radius,
                    fillColor
                }) {
        this.position = position;
        this.rX = radius;
        this.rY = radius;
        this.fillColor = fillColor;

        this.body = new Ellipse
        ({
            position: new Vector2D(this.position.x, this.position.y),
            fillColor: this.fillColor,
            rX: this.rX,
            rY: this.rY
        });
    }

    draw(ctx) {
        this.body.draw(ctx);
    }

    update(deltaTime)
    {
        
    }
}
