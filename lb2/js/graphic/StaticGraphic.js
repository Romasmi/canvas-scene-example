class StaticGraphic extends Pen {
    constructor(options = {}) {
        super
        ({
            ctx: options.ctx
        });
        this.dashboard = options.dashboard;
    };

    drawCloud(options = {}) {
        const params = {};
        Object.assign(params, {
            dashboardHeight: 0,
            dashboardWidth: 0,
            x: 0,
            y: 0,
            viewCoefficient: 1,
            fillColor: '#cfe2f3'
        }, options);

        const cloudSize =
            {
                startX: params.x,
                startY: params.y,
                y1: params.y * params.viewCoefficient,
                y2: params.y + params.dashboardHeight * 0.02 * params.viewCoefficient,
                y3: params.y - params.dashboardHeight * 0.02 * params.viewCoefficient,
                rX: params.dashboardWidth * 0.07,
                rY: params.dashboardHeight * 0.05,
            };
        this.drawEllipse
        ({
            x: cloudSize.startX,
            y: cloudSize.startY + cloudSize.y1,
            rX: cloudSize.rX,
            rY: cloudSize.rY,
        });
        this.drawEllipse
        ({
            x: cloudSize.startX + cloudSize.rX * 1.2,
            y: cloudSize.startY + cloudSize.y2,
            rX: cloudSize.rX,
            rY: cloudSize.rY,
        });
        this.drawEllipse
        ({
            x: cloudSize.startX + cloudSize.rX * 2,
            y: cloudSize.startY + cloudSize.y3,
            rX: cloudSize.rX,
            rY: cloudSize.rY,
        });
    }

    drawSky(options = {}) {
        const params = {};
        Object.assign(params, {
            dashboardHeight: 0,
            dashboardWidth: 0,
            fillColor: '#3c78d8'
        }, options);

        this.drawRect
        ({
            x: 0,
            y: 0,
            width: params.dashboardWidth,
            height: params.dashboardHeight / 3 * 2,
            fillColor: params.fillColor
        });
    }

    drawFloor(options = {}) {
        const params = {};
        Object.assign(params, {
            dashboardHeight: 0,
            dashboardWidth: 0,
            fillColor: '#6aa84f'
        }, options);


        this.drawRect
        ({
            x: 0,
            y: params.dashboardHeight / 3 * 2,
            width: params.dashboardWidth,
            height: params.dashboardHeight / 3,
            fillColor: params.fillColor
        });
    }

    drawHouse(options = {}) {
        const params = {};
        Object.assign(params, {
            dashboardHeight: 0,
            dashboardWidth: 0,
            bodyColor: '#bf9000',
            windowColor: '#ffd966',
            windowBorderColor: '#9e8d5d',
            roofColor: '#c00',
            trumpetColor: '#666666',
        }, options);

        /*house body*/
        const houseSize =
            {
                houseWidth: params.dashboardWidth / 4,
                houseHeight: params.dashboardHeight / 2,
                houseBodyX: params.dashboardWidth / 2 - params.dashboardWidth / 8,
                houseBodyY: params.dashboardHeight - params.dashboardHeight / 2 - params.dashboardHeight * 0.05,
            };
        this.drawRect
        ({
            x: houseSize.houseBodyX,
            y: houseSize.houseBodyY,
            width: houseSize.houseWidth,
            height: houseSize.houseHeight,
            fillColor: params.bodyColor,
        });

        /*draw trumpet*/
        this.drawRect
        ({
            x: houseSize.houseBodyX + houseSize.houseWidth - houseSize.houseWidth * 0.20,
            y: houseSize.houseBodyY * 0.9 - houseSize.houseHeight * 0.3,
            width: houseSize.houseWidth * 0.15,
            height: houseSize.houseHeight * 0.3,
            fillColor: '#666666'
        });

        /*house roof*/
        this.drawTriangle
        ({
            x1: houseSize.houseBodyX - houseSize.houseWidth * 0.1,
            y1: houseSize.houseBodyY,
            x2: houseSize.houseBodyX + houseSize.houseWidth * 0.5,
            y2: houseSize.houseBodyY - houseSize.houseHeight * 0.5,
            x3: houseSize.houseBodyX + houseSize.houseWidth + houseSize.houseWidth * 0.1,
            y3: houseSize.houseBodyY,
            fillColor: params.roofColor,
            strokeColor: params.roofColor
        });

        /*draw window*/
        const windowSize =
            {
                quadrantWidth: houseSize.houseWidth / 4,
                quadrantHeight: houseSize.houseHeight / 4,
                x: houseSize.houseBodyX + houseSize.houseWidth / 2 - houseSize.houseWidth / 4,
                y: houseSize.houseBodyY + houseSize.houseHeight / 2 - houseSize.houseHeight / 4,
            };
        this.drawRect
        ({
            x: windowSize.x,
            y: windowSize.y,
            width: windowSize.quadrantWidth,
            height: windowSize.quadrantHeight,
            fillColor: params.windowColor,
            strokeColor: params.windowBorderColor
        });
        this.drawRect
        ({
            x: windowSize.x + windowSize.quadrantWidth,
            y: windowSize.y,
            width: windowSize.quadrantWidth,
            height: windowSize.quadrantHeight,
            fillColor: params.windowColor,
            strokeColor: params.windowBorderColor
        });
        this.drawRect
        ({
            x: windowSize.x,
            y: windowSize.y + windowSize.quadrantHeight,
            width: windowSize.quadrantWidth,
            height: windowSize.quadrantHeight,
            fillColor: params.windowColor,
            strokeColor: params.windowBorderColor
        });
        this.drawRect
        ({
            x: windowSize.x + windowSize.quadrantWidth,
            y: windowSize.y + windowSize.quadrantHeight,
            width: windowSize.quadrantWidth,
            height: windowSize.quadrantHeight,
            fillColor: params.windowColor,
            strokeColor: params.windowBorderColor
        });
    }

    drawSun(options = {})
    {
        const params = {};
        Object.assign(params, {
            dashboardHeight: 0,
            dashboardWidth: 0,
            x: 0,
            y: 0,
            fillColor: '#ffe599'
        }, options);

        this.drawEllipse
        ({
            x: params.x,
            y: params.y,
            rX: params.dashboardHeight * 0.09,
            ry: params.dashboardHeight * 0.10 * 2,
            fillColor: params.fillColor
        });
    }

    drawStaticPicture(options = {})
    {
        const params = {};
        Object.assign(params, {
            cloud1Size:
                {
                    x: this.dashboard.width / 10,
                    y: this.dashboard.height * 0.1,
                    viewCoefficient: 0.9,
                    fillColor: '#cfe2f3'
                },
            cloud2Size:
                {
                    x: this.dashboard.width / 10 * 4,
                    y: this.dashboard.height * 0.1,
                    viewCoefficient: 1.2,
                    fillColor: '#cfe2f3'
                },
            cloud3Size:
                {
                    x: this.dashboard.width / 10 * 9,
                    y: this.dashboard.height * 0.1,
                    viewCoefficient: 0.7,
                    fillColor: '#cfe2f3'
                },
        }, options);

        this.drawSky
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height
        });

        this.drawFloor
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height
        });

        this.drawHouse
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height
        });

        /*draw clouds*/
        this.drawCloud
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height,
            x: params.cloud1Size.x,
            y: params.cloud1Size.y,
            viewCoefficient: params.cloud1Size.viewCoefficient
        });

        this.drawCloud
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height,
            x: params.cloud2Size.x,
            y: params.cloud2Size.y,
            viewCoefficient: params.cloud2Size.viewCoefficient
        });

        this.drawCloud
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height,
            x: params.cloud3Size.x,
            y: params.cloud3Size.y,
            viewCoefficient: params.cloud3Size.viewCoefficient
        });

        this.drawSun
        ({
            dashboardWidth: this.dashboard.width,
            dashboardHeight: this.dashboard.height,
            x: 0,
            y: 0,
        });
    }
}