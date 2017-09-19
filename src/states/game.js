import Crosshairs from '../prefabs/crosshairs';
import Target from '../prefabs/target';

class Game extends Phaser.State {

  keyDown = false;
  wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

  constructor() {
    super();
  }
  
  create() {
    //setup UI
    this.countdownText = this.add.text(this.game.world.centerX, 0, '', {
      font: '40px Arial', fill: '#ffffff', align: 'center'
    });
    this.countdownText.anchor.set(0.5,0);

    //set up click listeners
    this.game.input.onDown.add(this.shoot, this);

    //setup a timer to end the game
    this.endGameTimer = this.game.time.create();
    this.endGameTimer.add(Phaser.Timer.SECOND * 10, this.endGame,this);
    this.endGameTimer.start();
  }

  update() {
    if(this.wKey.isDown) {
      if(!this.keyDown) {
          this.game.global.score++;
      }
      this.keyDown = true;
    } else {
      this.keyDown = false;
    }
  }

  endGame() {
    if(this.game.global.score > 0) {
      this.game.state.start('win');
    } else {
      this.game.state.start('gameover');
    }
  }

}

export default Game;
