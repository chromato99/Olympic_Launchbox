import OrderScene from "./OrderScene.js";

export default class EndingScene extends Phaser.Scene {
    constructor() {
        super('EndingScene');
    }

    init(data) {
        this.data = data;
    }

    preload() {
       
        this.load.image('endingBackground', 'assets/ending.png');
        this.load.image('restart', 'assets/restart.png');
    }

    create() {
        this.add.image(960, 540, 'endingBackground');
        let text = this.add.text(740, 700, 'Total Success : ' + this.data.count, { fontSize: '40px', fill: '#000000' });
        let restartButton = this.add.image(1600, 800, 'restart');

        restartButton.setInteractive();
        restartButton.on("pointerover", () => {
            restartButton.setScale(1.2, 1.2)
        });
        restartButton.on("pointerout", () => {
            restartButton.setScale(1, 1)
        });
        restartButton.on("pointerup", () => {
            this.data.count = 0;
            window.location.reload();
        });
    }

    update() {

    }
}
0