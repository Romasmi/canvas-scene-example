class KeyMap {
    constructor(element) {
        this.map = {};

        element.addEventListener('keydown', (event) => {
            this.onKeyDown(event.keyCode);
        });

        element.addEventListener('keyup', (event) => {
            this.onKeyUp(event.keyCode);
        });
    }

    onKeyDown(keyCode) {
        this.map[keyCode] = true;
    }

    onKeyUp(keyCode) {
        delete this.map[keyCode];
    }

    isPressed(keyCode) {
        return keyCode in this.map ? this.map[keyCode] : false;
    }
}