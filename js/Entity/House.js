class House {
    constructor({
                    bodyX,
                    bodyY,
                    width,
                    height,
                    bodyColor,
                    windowColor,
                    windowBorderColor,
                    roofColor,
                    trumpetColor
                }) {
        this.bodyX = bodyX;
        this.bodyY = bodyY;
        this.width = width;
        this.height = height;
        this.bodyColor = bodyColor;
        this.windowColor = windowColor;
        this.windowBorderColor = windowBorderColor;
        this.roofColor = roofColor;
        this.trumpetColor = trumpetColor;

        this.houseBody = new Rectangle({
            x: this.bodyX,
            y: this.bodyY,
            width: this.width,
            height: this.height,
            fillColor: this.bodyColor
        });

        this.trumpet = new Triangle({
            x: this.bodyX + this.width - this.width * 0.20,
            y: this.bodyY * 0.9 - this.height * 0.3,
            width: this.width * 0.15,
            height: this.height * 0.3,
            fillColor: this.trumpetColor
        });

        this.roof = new Triangle({
            x1: this.bodyX - this.width * 0.1,
            y1: this.bodyY,
            x2: this.bodyX + this.width * 0.5,
            y2: this.bodyY - this.height * 0.5,
            x3: this.bodyX + this.width + this.width * 0.1,
            y3: this.bodyY,
            fillColor: this.roofColor
        });

        this.windowSize =
            {
                quadrantWidth: this.width / 4,
                quadrantHeight: this.height / 4,
                x: this.bodyX + this.width / 2 - this.width / 4,
                y: this.bodyY + this.height / 2 - this.height / 4,
            };

        this.window =
            {
                quadrant1: new Rectangle({
                    x: this.windowSize.x,
                    y: this.windowSize.y,
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                }),
                quadrant2: new Rectangle({
                    x: this.windowSize.x + this.windowSize.quadrantWidth,
                    y: this.windowSize.y,
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                }),
                quadrant3: new Rectangle({
                    x: this.windowSize.x,
                    y: this.windowSize.y + this.windowSize.quadrantHeight,
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                }),
                quadrant4: new Rectangle({
                    x: this.windowSize.x + this.windowSize.quadrantWidth,
                    y: this.windowSize.y + this.windowSize.quadrantHeight,
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                })
            };
    }

    draw(ctx) {
        this.houseBody.draw(ctx);
        this.trumpet.draw(ctx);
        this.roof.draw(ctx);
        this.window.quadrant1.draw(ctx);
        this.window.quadrant2.draw(ctx);
        this.window.quadrant3.draw(ctx);
        this.window.quadrant4.draw(ctx);
    }
}
