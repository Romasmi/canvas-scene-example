class Sky extends Rectangle {
    constructor(options) {
        super(options);
    }

    update(options) {
        const lightness = generateLightnessByMiddleTime
        ({
            beginTime: 0,
            endTime: config.hoursInDay,
            minLightness: 0,
            maxLightness: 45,
            currentTime: options.timeInHour
        });
        this.fillColor = hslColor(203, 98, lightness);
    }
}
