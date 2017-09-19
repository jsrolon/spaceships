import Boot from './states/boot';
import Game from './states/game';
import Win from './states/win';
import GameOver from "./states/gameover";


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'spaceships-game');

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('win', new Win());
game.state.add('gameover', new GameOver());

game.state.start('boot');
