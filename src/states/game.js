import CivilianShip from "../prefabs/civilian_ship";
import Directions from "../common/directions"

class Game extends Phaser.State {

    constructor() {
        super();
    }

    preload() {
        this.load.image('civilian_ship', 'assets/civilian_ship.png');
    }

    create() {
        //setup UI
        this.countdownText = this.add.text(this.game.world.centerX, 0, 'Pres W as many times as possible', {
            font: '40px Arial', fill: '#ffffff', align: 'center'
        });
        this.countdownText.anchor.set(0.5, 0);

        // create the user's ship
        this.ship = new CivilianShip(this.game, 0, 0, 'civilian_ship');
        this.game.add.existing(this.ship);

        //set up click listeners
        this.game.input.keyboard.addCallbacks(this, this.keyTap);
    }

    keyTap() {
        let dirDelta = Directions[this.game.input.keyboard.lastKey.keyCode];
        this.ship.move(dirDelta);
    }
}

export default Game;
