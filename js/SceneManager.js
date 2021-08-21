import MakeScene from '../js/MakeScene.js';
import OrderScene from '../js/OrderScene.js';
import ServeScene from '../js/ServeScene.js';
import GameOver from '../js/GameOver.js';

export default class SceneManager extends Phaser.Scene {
    constructor() {
        super('SceneManager');
    }

    preload() {

    }

    create() {
        this.scene.launch('OrderScene');
    }

    update() {
        if(this.scene.isActive('OrderScene')) {
            console.log(1);
        }
    }
}