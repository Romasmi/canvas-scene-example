class House {
    constructor({
                    position,
                    width,
                    height,
                    bodyColor,
                    windowColor,
                    windowBorderColor,
                    roofColor,
                    trumpetColor
                }) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.bodyColor = bodyColor;
        this.windowColor = windowColor;
        this.windowBorderColor = windowBorderColor;
        this.roofColor = roofColor;
        this.trumpetColor = trumpetColor;

        this.houseBody = new Rectangle({
            position: new Vector2D(this.position.x, this.position.y),
            width: this.width,
            height: this.height,
            fillColor: this.bodyColor
        });

        this.trumpet = new Rectangle({
            position: new Vector2D(this.position.x + this.width - this.width * 0.20, this.position.y * 0.9 - this.height * 0.3),
            width: this.width * 0.15,
            height: this.height * 0.3,
            fillColor: this.trumpetColor
        });

        this.roof = new Triangle({
            position1: new Vector2D(this.position.x - this.width * 0.1, this.position.y),
            position2: new Vector2D(this.position.x + this.width * 0.5, this.position.y - this.height * 0.5),
            position3: new Vector2D(this.position.x + this.width + this.width * 0.1, this.position.y),
            fillColor: this.roofColor
        });

        this.windowSize =
            {
                position: new Vector2D(this.position.x + this.width / 2 - this.width / 4, this.position.y + this.height / 2 - this.height / 4),
                quadrantWidth: this.width / 4,
                quadrantHeight: this.height / 4,
            };

        this.setWindow();
    }

    setWindow() {
        this.window =
            {
                quadrant1: new Rectangle({
                    position: new Vector2D(this.windowSize.position.x, this.windowSize.position.y),
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                }),
                quadrant2: new Rectangle({
                    position: new Vector2D(this.windowSize.position.x + this.windowSize.quadrantWidth, this.windowSize.position.y),
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                }),
                quadrant3: new Rectangle({
                    position: new Vector2D(this.windowSize.position.x, this.windowSize.position.y + this.windowSize.quadrantHeight),
                    width: this.windowSize.quadrantWidth,
                    height: this.windowSize.quadrantHeight,
                    fillColor: this.windowColor,
                    strokeColor: this.windowBorderColor
                }),
                quadrant4: new Rectangle({
                    position: new Vector2D(this.windowSize.position.x + this.windowSize.quadrantWidth, this.windowSize.position.y + this.windowSize.quadrantHeight),
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

    update(options) {
        if (options.timeInHour > config.endTimeForMorningLight && options.timeInHour < config.beginTimeForEveningLight) {
            const lightness = generateLightnessByMiddleTime
            ({
                beginTime: config.endTimeForMorningLight,
                endTime: config.beginTimeForEveningLight,
                minLightness: 0,
                maxLightness: 70,
                currentTime: options.timeInHour
            });
            this.windowColor = hslColor(196, 76, lightness);
        } else if (options.timeInHour <= config.endTimeForMorningLight) {
            const lightness = generateLightnessByMiddleTime
            ({
                beginTime: 0,
                endTime: config.endTimeForMorningLight,
                minLightness: 0,
                maxLightness: 50,
                currentTime: options.timeInHour
            });
            this.windowColor = hslColor(54, 76, lightness);
        } else if (options.timeInHour >= config.beginTimeForEveningLight) {
            const lightness = generateLightnessByMiddleTime
            ({
                beginTime: config.beginTimeForEveningLight,
                endTime: config.hoursInDay,
                minLightness: 0,
                maxLightness: 50,
                currentTime: options.timeInHour
            });
            this.windowColor = hslColor(54, 76, lightness);
        }
        this.setWindow();
    }
}
