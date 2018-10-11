function drawRectangle(ctx, rectangle) {
    ctx.fillStyle = rectangle.fillColor;
    ctx.fillStyle = rectangle.fillColor;
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    if (rectangle.strokeColor !== undefined)
    {
        ctx.strokeColor = rectangle.strokeColor;
        ctx.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
}

function drawTriangle(ctx, triangle) {
    ctx.beginPath();
    ctx.moveTo(triangle.x1, triangle.y1);
    ctx.lineTo(triangle.x2, triangle.y2);
    ctx.lineTo(triangle.x3, triangle.y3);
    ctx.closePath();
    ctx.fillStyle = triangle.fillColor;
    ctx.fill();
}

function drawEllipse(ctx, ellipse) {

    ctx.beginPath();
    ctx.ellipse(
        ellipse.x,
        ellipse.y,
        ellipse.rX,
        ellipse.rY,
        0,
        0,
        2 * Math.PI,
        false
    );
    ctx.closePath();
    ctx.fillStyle = ellipse.fillColor;
    ctx.fill();
}

function drawHouse(ctx, house) {
    const houseBody = {
        x: house.bodyX,
        y: house.bodyY,
        width: house.width,
        height: house.height,
        fillColor: house.bodyColor
    };
    drawRectangle(ctx, houseBody);
    const trumpet =
        {
            x: house.bodyX + house.width - house.width * 0.20,
            y: house.bodyY * 0.9 - house.height * 0.3,
            width: house.width * 0.15,
            height: house.height * 0.3,
            fillColor: house.trumpetColor
        };
    drawRectangle(ctx, trumpet);

    const roof =
        {
            x1: house.bodyX - house.width * 0.1,
            y1: house.bodyY,
            x2: house.bodyX + house.width * 0.5,
            y2: house.bodyY - house.height * 0.5,
            x3: house.bodyX + house.width + house.width * 0.1,
            y3: house.bodyY,
            fillColor: house.roofColor
        }
    drawTriangle(ctx, roof);

    /*draw window*/
    const windowSize =
        {
            quadrantWidth: house.width / 4,
            quadrantHeight: house.height / 4,
            x: house.bodyX + house.width / 2 - house.width / 4,
            y: house.bodyY + house.height / 2 - house.height / 4,
        };
    const window =
        {
            quadrant1: {
                x: windowSize.x,
                y: windowSize.y,
                width: windowSize.quadrantWidth,
                height: windowSize.quadrantHeight,
                fillColor: house.windowColor,
                strokeColor: house.windowBorderColor
            },
            quadrant2: {
                x: windowSize.x + windowSize.quadrantWidth,
                y: windowSize.y,
                width: windowSize.quadrantWidth,
                height: windowSize.quadrantHeight,
                fillColor: house.windowColor,
                strokeColor: house.windowBorderColor
            },
            quadrant3: {
                x: windowSize.x,
                y: windowSize.y + windowSize.quadrantHeight,
                width: windowSize.quadrantWidth,
                height: windowSize.quadrantHeight,
                fillColor: house.windowColor,
                strokeColor: house.windowBorderColor
            },
            quadrant4: {
                x: windowSize.x + windowSize.quadrantWidth,
                y: windowSize.y + windowSize.quadrantHeight,
                width: windowSize.quadrantWidth,
                height: windowSize.quadrantHeight,
                fillColor: house.windowColor,
                strokeColor: house.windowBorderColor
            }
        };
    drawRectangle(ctx, window.quadrant1);
    drawRectangle(ctx, window.quadrant2);
    drawRectangle(ctx, window.quadrant3);
    drawRectangle(ctx, window.quadrant4);
}

function drawCloud(ctx, cloud) {
    drawEllipse(ctx, cloud.part.part1);
    drawEllipse(ctx, cloud.part.part2);
    drawEllipse(ctx, cloud.part.part3);
}

function drawSun(ctx, sun)
{
    drawEllipse(ctx, sun);
}
