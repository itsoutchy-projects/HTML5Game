export default class GameObject {
    colour;
    x;
    y;
    width;
    height;
    src;

    /**
     * Creates a GameObject, only one of colour or src can be defined
     * @param {string | undefined} colour The colour of the `GameObject`, only used if `src` doesn't have a value
     * @param {Number} x The starting X position of the `GameObject`
     * @param {Number} y The starting Y position of the `GameObject`
     * @param {Number} width The width of the `GameObject`
     * @param {Number} height The height of the `GameObject`
     * @param {string | undefined} src The source image of the `GameObject` used if `colour` doesn't have a value
     */
    constructor(colour, x, y, width, height, src) {
        this.colour = colour;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
    }

    /**
     * Checks if this `GameObject` is overlapping `obj2`
     * @param {GameObject} obj2 The other object
     * @returns {Boolean}
     */
    Overlapping = (obj2) => {
        let sides = {
            Left: this.x > obj2.x,
            Right: this.x + this.width < obj2.x + obj2.width,
            Top: this.y < obj2.y,
            Bottom: this.y - this.height > obj2.x - obj2.height
        }

        return sides.Left && sides.Right && sides.Top && sides.Bottom;
    }
}