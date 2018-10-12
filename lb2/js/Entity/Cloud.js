class Cloud {
    constructor({
                    x,
                    y,
                    width,
                    height,
                    heightDispersion,
                    widthDispersion,
                    fillColor
                }) {
        this.x = x;
        this.y = y;
        this.y1 = y + y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.y2 = y + y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.y3 = y + y * heightDispersion * Math.round(Math.random() * 2 - 1);
        this.heightDispersion = heightDispersion;
        this.widthDispersion = widthDispersion;
        this.rX = height / 2;
        this.rY = height / 3;
        this.width = width / 3;
        this.fillColor = fillColor;
        this.part =
            {
                part1: new Ellipse({
                    x: this.x,
                    y: this.y,
                    rX: this.rX + this.rX * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    rY: this.rY + this.rY * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    fillColor: this.fillColor
                }),
                part2: new Ellipse({
                    x: this.x + this.width * this.widthDispersion,
                    y: this.y2,
                    rX: this.rX + this.rX * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    rY: this.rY + this.rY * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    fillColor: this.fillColor
                }),
                part3: new Ellipse({
                    x: this.x + this.width * 2 * this.widthDispersion,
                    y: this.y3,
                    rX: this.rX + this.rX * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    rY: this.rY + this.rY * this.heightDispersion * Math.round(Math.random() * 2 - 1),
                    fillColor: this.fillColor
                }),
            }
    }

    reCalc() {
        this.part.part1.x = this.x;
        this.part.part2.x = this.x + this.width * this.widthDispersion;
        this.part.part3.x = this.x + this.width * 2 * this.widthDispersion;
        return this;
    }

    draw(ctx)
    {
        this.part.part1.draw(ctx);
        this.part.part2.draw(ctx);
        this.part.part3.draw(ctx);
    }
}
