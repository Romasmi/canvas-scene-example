class Pen {
    constructor(options = {}) {
        Object.assign(this, {
            defaultColor: '#000000'
        }, options);
        this.ctx = options.ctx;
    };

    drawRect(options = {}) {
        let params = {};
        Object.assign(params, {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            fillColor: '#000000'
        }, options);

        this.ctx.fillStyle = params.fillColor;
        this.ctx.fillRect(params.x, params.y, params.width, params.height);
        if (params.strokeColor)
        {
            this.ctx.strokeStyle = params.strokeColor;
            this.ctx.strokeRect(params.x, params.y, params.width, params.height);
        }

    };

    drawTriangle(options = {}) {
        let params = {};
        Object.assign(params, {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            x3: 0,
            y3: 0,
            fillColor: '#000',
            strokeColor: '#000'
        }, options);

        this.ctx.beginPath();

        this.ctx.moveTo(params.x1, params.y1);
        this.ctx.lineTo(params.x2, params.y2);
        this.ctx.lineTo(params.x3, params.y3);
        this.ctx.closePath();

        this.ctx.strokeStyle = params.strokeColor;
        this.ctx.stroke();

        this.ctx.fillStyle = params.fillColor;
        this.ctx.fill();
    }

    drawEllipse(options = {}) {
        let params = {};
        Object.assign(params, {
            x: 50,
            y: 50,
            rX: 50,
            rY: 50,
            rotation: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            antiClockWise: false,
            fillColor: '#cfe2f3',
            strokeColor: '#cfe2f3'
        }, options);

        this.ctx.beginPath();
        this.ctx.ellipse(
            params.x,
            params.y,
            params.rX,
            params.rY,
            params.rotation,
            params.startAngle,
            params.endAngle,
            params.antiClockWise
        );
        this.ctx.closePath();
        this.ctx.strokeStyle = params.strokeColor;
        this.ctx.fillStyle = params.fillColor;
        this.ctx.stroke();
        this.ctx.fill();
    }
}
