function hourToAngle(hour) {
    hour = hour % config.hoursInDay;
    return hour / config.hoursInDay * config.anglesForSun;
}

function getUpdatedTime(time) {
    return (time + config.timeSpeedHourPerSecond / config.fps) % config.hoursInDay;
}


function getCenteredPosition(centerPosition, objectPosition) {
    return new Vector2D
    (
        objectPosition.x - centerPosition.x,
        centerPosition.y - objectPosition.y
    );
}

function getRecenteredPosition(centerPosition, objectPosition) {
    return new Vector2D
    (
        objectPosition.x + centerPosition.x,
        centerPosition.y - objectPosition.y
    );
}

function getHypotenuse(leg1, leg2) {
    return Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));
}

function degreesToRadians(degrees) {
    return degrees * config.degreesInRadians;
}

function getYByXInSinusoid(x, stretchingX, stretchingY) {
    return stretchingY * Math.sin(stretchingX * x);
}

function hslColor(hue, saturation, lightness) {
    return "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
}

function generateLightnessByMiddleTime(options) {
    const distanceBetweenBeginAndEnd = options.endTime - options.beginTime;
    const middle = options.beginTime + distanceBetweenBeginAndEnd / 2;
    const distanceBetweenLightness = options.maxLightness - options.minLightness;

    let lightness = 0;
    if (options.currentTime < middle) {
        const distanceBetweenBeginAndMiddle = middle - options.beginTime;
        const distanceBetweenBeginAndCurrent = options.currentTime - options.beginTime;
        lightness = (distanceBetweenBeginAndCurrent / distanceBetweenBeginAndMiddle) *
            distanceBetweenLightness +
            options.minLightness
    } else {
        const distanceBetweenMiddleAndEnd = options.endTime - middle;
        const distanceBetweenCurrentAndEnd = options.endTime - options.currentTime;
        lightness = (distanceBetweenCurrentAndEnd / distanceBetweenMiddleAndEnd) *
            distanceBetweenLightness +
            options.minLightness
    }
    console.log(options);
    return lightness;
}