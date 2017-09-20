class CivilianShip extends Phaser.Sprite {

    constructor(game, x, y, frame) {
        super(game, x, y, 'civilian_ship', frame);

        this.anchor.setTo(0.5, 0.5);
    }
}

export default CivilianShip;
