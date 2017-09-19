class Game extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        //setup UI
        this.countdownText = this.add.text(this.game.world.centerX, 0, 'Pres W as many times as possible', {
            font: '40px Arial', fill: '#ffffff', align: 'center'
        });
        this.countdownText.anchor.set(0.5, 0);

        //set up click listeners
        this.game.input.keyboard.addCallbacks(this, this.keyTap);

        //setup a timer to end the game
        this.endGameTimer = this.game.time.create();
        this.endGameTimer.add(Phaser.Timer.SECOND * 10, this.endGame, this);
        this.endGameTimer.start();
    }

    keyTap() {
        if(this.game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.W) {
            this.game.global.score++;
        }

        console.log(this.game.global.score);
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
