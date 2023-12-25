export default class Input {
    /**
     * @type {Array<string>}
     */
    static PressedKeys = [];

    static mouseDown = false;

    /**
     * @type {Array<(ev:Event)>}
     */
    static scrollListeners = [];

    static mousePos = {
        x: 0,
        y: 0
    }
    
    /**
     * Initializes the `Input` class, this only has to be done once, it is done right before the game starts, when `HTML5Game.Start();` is called
     */
    constructor() {
        window.addEventListener("keydown", function(ev) {
            if (!Input.PressedKeys.includes(ev.key.toLowerCase())) {
                Input.PressedKeys.push(ev.key.toLowerCase());
            }
        });

        window.addEventListener("keyup", function(ev) {
            Input.PressedKeys.splice(Input.PressedKeys.indexOf(ev.key.toLowerCase()), 1);
        });

        window.addEventListener("mousedown", function(ev) {
            Input.mouseDown = true;
        });

        window.addEventListener("mouseup", function(ev) {
            Input.mouseDown = false;
        });

        window.addEventListener("scroll", function(ev) {
            Input.scrollListeners.forEach(function(value) {
                value(ev);
            });
        });

        window.addEventListener("mousemove", function(ev) {
            Input.mousePos.x = ev.clientX;
            Input.mousePos.y = ev.clientY;
        });
    }

    /**
     * Adds an event listener to track scroll events
     * @param {(ev:Event)} callback
     */
    static addScrollListener(callback) {
        Input.scrollListeners.push(callback);
    }

    /**
     * Checks if a key is pressed
     * @param {string} key The key to check
     * @returns 
     */
    static isKeyDown(key) {
        return Input.PressedKeys.includes(key);
    }
}
