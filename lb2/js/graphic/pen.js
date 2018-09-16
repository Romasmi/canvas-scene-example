class Pen
{
    constructor(options = {})
    {
        Object.assign(this, {
            defaultColor: '#000000'
        }, options);
        this.ctx = options.ctx;
    };
    
    drawRect(options = {})
    {
        Object.assign(options, {
            x1: 0,
            y1: 0,
            width: 100,
            height: 100,
            fillColor: '#000000',
            strokeColor: options.fillColor
        }, options);

        this.ctx.strokeStyle = options.strokeColor;
        this.ctx.fillStyle = options.fillColor;

        this.ctx.fillRect(options.x1, options.y1, options.width, options.height);
        this.ctx.strokeRect(options.x1, options.y1, options.width, options.height);
    };

    drawWindow(options = {})
    {
        Object.assign(options, {
            windowPartWidth: 40,
            windowCord: {
                x: 360,
                y: 260
            },
            fillColor: '#ffd966',
            strokeColor: '#9e8d5d'
        }, options);

        this.drawRect
        ({
            x1: options.windowCord.x,
            y1: options.windowCord.y,
            width: options.windowPartWidth,
            height: options.windowPartWidth,
            fillColor: options.fillColor,
            strokeColor: options.strokeColor
        });
        this.drawRect
        ({
            x1: options.windowCord.x + options.windowPartWidth,
            y1: options.windowCord.y,
            width: options.windowPartWidth,
            height: options.windowPartWidth,
            fillColor: options.fillColor,
            strokeColor: options.strokeColor
        });
        this.drawRect
        ({
            x1: options.windowCord.x,
            y1: options.windowCord.y + options.windowPartWidth,
            width: options.windowPartWidth,
            height: options.windowPartWidth,
            fillColor: options.fillColor,
            strokeColor: options.strokeColor
        });
        this.drawRect
        ({
            x1: options.windowCord.x + options.windowPartWidth,
            y1: options.windowCord.y + options.windowPartWidth,
            width: options.windowPartWidth,
            height: options.windowPartWidth,
            fillColor: options.fillColor,
            strokeColor: options.strokeColor
        });
    }
}