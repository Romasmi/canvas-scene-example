class Scene {
    constructor(ctx)
    {
        this.ctx = ctx;
        this.objects = [];
        this.a = 1;
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

    update(options)
    {
        this.objects.forEach( object => {
            if (object.update)
            {
                object.update(options);
            }
        });
    }
}