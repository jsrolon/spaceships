/**
 * The directions defined here are defined based on Phaser's coordinate system
 * they are used as multiplicative factors for the speed of differing entities, such as ships
 *
 * @type {{FORWARD: number, BACKWARD: number, LEFT: number, RIGHT: number}}
 */
const Directions = {
    87: {x: 0, y: -1},
    83: {x: 0, y: 1},
    65: {x: -1, y: 0},
    68: {x: 1, y: 0}
};

export default Directions;
