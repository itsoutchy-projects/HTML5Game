import GameObject from "./GameObject.js";
import Input from "./Input.js";

/**
 * Base class for all HTML5 games
 */
export default class HTML5Game {
    /**
     * @type {HTMLCanvasElement}
     */
    canvas;
    /**
     * @type {Array<GameObject>}
     */
    objects = [];

    /**
     * The offset for the camera, the scene will be shifted to fit
     */
    cameraOff = {
        x: 0,
        y: 0
    }

    zoom = 1;

    updateCallback = () => {
        return;
    }

    /**
     * Initializes a HTML5 Game
     * @param {HTMLCanvasElement} canvas The canvas used for drawing objects
     * @param {Function} updateCallback A callback function to be called on every frame
     */
    constructor(canvas, updateCallback) {
        this.canvas = canvas;
        this.updateCallback = updateCallback;
    }

    /**
     * Adds `object` to the list of GameObjects ready to be drawn
     * @param {GameObject} object The object to draw
     */
    draw(object) {
        this.objects.push(object);
    }

    /**
     * Updates the game, it is not recommended to call this except from in the main game loop, however that is already handled if you start the HTML5 Game
     */
    Update = (time) => {
        this.updateCallback();

        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let cameraOff = this.cameraOff;

        // Draws all the GameObjects
        this.objects.forEach(function(value, index, array) {
            if (value.src != undefined) {
                // This object is an image, so we need to do it differently
                let img = document.createElement("img");
                img.src = value.src;
                img.width = value.width;
                img.height = value.height;
                ctx.drawImage(img, value.x - cameraOff.x, value.y - cameraOff.y);
            } else {
                // This object is a regular rectangle, so it's easy to draw it
                let fill = ctx.fillStyle;
                ctx.fillStyle = value.colour;
                ctx.fillRect(value.x - cameraOff.x, value.y - cameraOff.y, value.width, value.height);
                ctx.fillStyle = fill;
            }
        });
        requestAnimationFrame(this.Update);
    }

    Zoom(amount) {
        let ctx = this.canvas.getContext("2d");
        
        ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.zoom += amount;
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-(this.canvas.width / 2), -(this.canvas.height / 2));
    }

    ResetZoom() {
        let ctx = this.canvas.getContext("2d");
        this.zoom = 1;
        ctx.scale(this.zoom, this.zoom);
    }

    /**
     * Starts the HTML5 Game, this will call updates
     */
    Start() {
        let input = new Input();
        requestAnimationFrame(this.Update);
    }
}
