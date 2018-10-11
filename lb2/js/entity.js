function Rectangle
({
     x,
     y,
     width,
     height,
     fillColor
 }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
}

function Triangle
({
     x1,
     y1,
     x2,
     y2,
     x3,
     y3,
     fillColor,
 }) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.fillColor = fillColor;
}

function Ellipse
({
     x,
     y,
     rX,
     rY,
     fillColor,
     rotation
 }) {
    this.x = x;
    this.y = y;
    this.rX = rX;
    this.rY = rY;
    this.fillColor = fillColor;
    this.rotation = rotation;
}

function House
({
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
}

function Cloud
({
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
                x: x,
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

function Sun
({
     x,
     y,
     radius,
     fillColor
 }) {
    this.x = x;
    this.y = y;
    this.rX = radius;
    this.rY = radius;
    this.fillColor = fillColor;
}