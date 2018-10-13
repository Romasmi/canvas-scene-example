class Cloud {
    constructor({
                    position,
                    width,
                    height,
                    heightDispersion,
                    widthDispersion,
                    fillColor
                }) {
        this.position = position;
        this.y1 = this.position.y + this.position.y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.y2 = this.position.y + this.position.y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.y3 = this.position.y + this.position.y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.heightDispersion = heightDispersion;
        this.widthDispersion = widthDispersion;
        this.rX = height / 2;
        this.rY = height / 3;
        this.width = width / 3;
        this.fillColor = fillColor;
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
        return this;
    }

    draw(ctx)
    {
        this.part.part1.draw(ctx);
        this.part.part2.draw(ctx);
        this.part.part3.draw(ctx);
    }
}
