class Sky extends Rectangle{
    constructor(options) {
        super(options);
    }

    update(options){
        let time;
        if (options.timeInHour < 12)
        {
            time = options.timeInHour;
        }
        else
        {
            time = 24 - options.timeInHour;
        }
        const lightness = time / 12 * 45;

        this.fillColor = hslColor(203, 98, lightness);
    }
}
