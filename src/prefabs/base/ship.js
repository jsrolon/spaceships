import Directions from "../../common/directions"

class Ship extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);

        this.speed = 15;
    }

    move(direction) {
        console.log(direction);
        switch (direction) {
            case Directions.FORWARD:
                this.y -= this.speed;
                break;
            case Directions.BACKWARD:
                this.y += this.speed;
                break;
            case Directions.LEFT:
                this.x -= this.speed;
                break;
            case Directions.RIGHT:
                this.x += this.speed;
                break;
        }
    }
}

export default Ship;
