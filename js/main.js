// /** @type {import("../types/phaser")} */

import MainMenu from '../js/MainMenu.js';
import MakeScene from '../js/MakeScene.js';
import OrderScene from '../js/OrderScene.js';
import ServeScene from '../js/ServeScene.js';
import GameOver from '../js/GameOver.js';
import SceneManager from '../js/SceneManager.js';
import GoodScene from '../js/GoodScene.js';
import EndingScene from '../js/EndingScene.js';
import OpeningScene from '../js/OpeningScene.js';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: [OpeningScene, MainMenu, MakeScene, OrderScene, ServeScene, GameOver, SceneManager, GoodScene, EndingScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);