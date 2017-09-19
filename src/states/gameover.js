class GameOver extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        this.textMessage = this.add.text(this.game.world.centerX, 0, 'You just lost', {
            font: '40px Arial', fill: '#ffffff', align: 'center'
        });
        this.textMessage.anchor.set(0,0);
    }
}

export default GameOver;
