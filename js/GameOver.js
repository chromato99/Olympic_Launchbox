export default class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image('gameoverBackground1', 'assets/archery4.png');
        this.load.image('gameoverBackground2', 'assets/pingpong4.png');
        this.load.image('gameoverBackground3', 'assets/shooting4.png');
        this.load.image('gameoverBackground4', 'assets/volleyball4.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('nextending', 'assets/next.png');
    }

    create() {
        this.add.image(960, 540, 'gameoverBackground' + this.data.athlete);
        this.add.image(960, 300, 'gameover');
        let nextendingButton = this.add.image(1600, 800, 'nextending');

        nextendingButton.setInteractive();
        nextendingButton.on("pointerover", () => {
            nextendingButton.setScale(1.2, 1.2)
        });
        nextendingButton.on("pointerout", () => {
            nextendingButton.setScale(1, 1)
        });
        nextendingButton.on("pointerup", () => {
            this.scene.start('EndingScene', this.data);
        });
    }

    update() {

    }
}
0