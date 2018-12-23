class Floor extends Rectangle {
    constructor(options) {
        super(options);
    }

    update(options) {
        const lightness = generateLightnessByMiddleTime
        ({
            beginTime: 0,
            endTime: config.hoursInDay,
            minLightness: 0,
            maxLightness: 50,
            currentTime: options.timeInHour
        });
        this.fillColor = hslColor(129, 39, lightness);
    }
}
