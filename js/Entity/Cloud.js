class Cloud {
    constructor({
                    position,
                    width,
                    height,
                    heightDispersion,
                    widthDispersion,
                    fillColor,
                    speed,
                    sinStretchingY,
                    sinStretchingX
                }) {
        this.position = position;

        this.y1Dispersion = this.position.y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.y2Dispersion = this.position.y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.y3Dispersion = this.position.y * heightDispersion * Math.round(Math.random() * 2 - 1);

        this.y1 = this.position.y + this.y1Dispersion;
        this.y2 = this.position.y + this.y2Dispersion;
        this.y3 = this.position.y + this.y3Dispersion;
        this.heightDispersion = heightDispersion;
        this.widthDispersion = widthDispersion;
        this.rX = height / 2;
        this.rY = height / 3;
        this.width = width / 3;
        this.fillColor = fillColor;
        this.speed = speed;

        this.sinStretchingY = sinStretchingY;
        this.sinStretchingX = sinStretchingX;

        this.part =
            {
                part1: new Ellipse({
                    position: new Vector2D(this.position.x, this.y1),
                    rX: this.rX + this.rX * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    rY: this.rY + this.rY * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    fillColor: this.fillColor
                }),
                part2: new Ellipse({
                    position: new Vector2D(this.position.x + this.width * this.widthDispersion, this.y2),
                    rX: this.rX + this.rX * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    rY: this.rY + this.rY * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    fillColor: this.fillColor
                }),
                part3: new Ellipse({
                    position: new Vector2D(this.position.x + this.width * 2 * this.widthDispersion, this.y3),
                    rX: this.rX + this.rX * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    rY: this.rY + this.rY * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    fillColor: this.fillColor
                }),
            }
    }

    reCalc() {
        this.part.part1.position.x = this.position.x;
        this.part.part2.position.x = this.position.x + this.width * this.widthDispersion;
        this.part.part3.position.x = this.position.x + this.width * 2 * this.widthDispersion;

        this.part.part1.position.y = this.position.y + this.y1Dispersion;
        this.part.part2.position.y = this.position.y + this.y2Dispersion;
        this.part.part3.position.y = this.position.y + this.y3Dispersion;

        return this;
    }

    draw(ctx) {
        this.part.part1.draw(ctx);
        this.part.part2.draw(ctx);
        this.part.part3.draw(ctx);
    };

    update(options) {
        if (this.speed > 0) {
            if (this.position.x - this.rX < options.container.width) {
                this.position.x += this.speed * options.deltaTime;
            } else {
                this.position.x = -this.width - this.rX;
            }
        } else {
            if (this.position.x + this.width + this.rX > 0) {
                this.position.x += this.speed * options.deltaTime;
            } else {
                this.position.x = options.container.width + this.rX;
            }
        }
        this.position.y += getYByXInSinusoid(this.position.x, this.sinStretchingX, this.sinStretchingY);
        this.reCalc();
    };
}
