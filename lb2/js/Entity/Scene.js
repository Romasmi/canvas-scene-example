class Scene {
    constructor(ctx)
    {
        this.ctx = ctx;
        this.objects = [];
    }

    addObject(object)
    {
        if (object === undefined)
        {
            return false;
        }

        this.objects.push(object);
    }

    draw()
    {
        this.objects.forEach( object => {
            object.draw(this.ctx);
        });
    }
}