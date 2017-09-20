import Directions from "../../common/directions"

class Ship extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);

        this.speed = 15;
    }

    move(dirDelta) {
        console.log(dirDelta);

        console.log(this.x + "," + this.y);

        ['x', 'y'].forEach((coord) => {
            this[coord] += this.speed * dirDelta[coord];
        });
    }
}

export default Ship;
