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

        //setup a timer to end the game
        this.endGameTimer = this.game.time.create();
        this.endGameTimer.add(Phaser.Timer.SECOND * 10, this.endGame, this);
        this.endGameTimer.start();
    }

    keyTap() {
        switch (this.game.input.keyboard.lastKey.keyCode) {
            case Phaser.Keyboard.W:
                this.ship.move(Directions.FORWARD);
                break;
            case Phaser.Keyboard.S:
                this.ship.move(Directions.BACKWARD);
                break;
            case Phaser.Keyboard.A:
                this.ship.move(Directions.LEFT);
                break;
            case Phaser.Keyboard.D:
                this.ship.move(Directions.RIGHT);
                break;
        }
    }

    endGame() {
        this.game.input.keyboard.stop();

        if (this.game.global.score > 10) {
            this.game.state.start('win');
        } else {
            this.game.state.start('gameover');
        }
    }
}

export default Game;
