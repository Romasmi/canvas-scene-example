class Sun {
    constructor({
                    position,
                    radius,
                    fillColor,
                    container
                }) {
        this.position = position;
        this.rX = radius;
        this.rY = radius;
        this.fillColor = fillColor;
        this.container = container;

        this.body = new Ellipse
        ({
            position: new Vector2D(this.position.x, this.position.y),
            fillColor: this.fillColor,
            rX: this.rX,
            rY: this.rY
        });

        this.containerCenterPosition = new Vector2D(this.container.width / 2, this.container.height + this.rX);
        this.body.coordinatesFromCenter = getCenteredPosition(this.containerCenterPosition, this.body.position);
        this.radiusFromCenter = getHypotenuse(this.body.coordinatesFromCenter.x, this.body.coordinatesFromCenter.y);
    }

    draw(ctx) {
        this.body.draw(ctx);
    }

    update(options) {
        const angle = degreesToRadians(hourToAngle(options.timeInHour) - config.coordinateSystemDifferenceInDegrees);
        this.body.coordinatesFromCenter = new Vector2D
        (
            Math.sin(angle) * this.radiusFromCenter,
            Math.cos(angle) * this.radiusFromCenter
        );

        this.body.position = getRecenteredPosition(this.containerCenterPosition, this.body.coordinatesFromCenter);
    }
}
