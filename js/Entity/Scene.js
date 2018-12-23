class Scene {
    constructor(ctx) {
        this.ctx = ctx;
        this.objects = [];
        this.stopped = false;
    }

    addObject(object) {
        if (object === undefined) {
            return false;
        }

        this.objects.push(object);
    }

    draw() {
        this.objects.forEach(object => {
            object.draw(this.ctx);
        });
    }

    update(options) {
        if (!this.stopped) {
            this.objects.forEach(object => {
                if (object.update) {
                    object.update(options);
                }
            });
        }
    }

    processKeyMap(keyMap) {
        this.objects.forEach(object => {
            if (object.processKeyMap) {
                object.processKeyMap(keyMap);
            }
        });

        if (keyMap.isPressed(config.keyCode.SPACE)) {
            if (this.stopped) {
                this.stopped = false;
            } else {
                this.stopped = true;
            }
        }
    }
}