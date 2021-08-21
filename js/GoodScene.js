export default class GoodScene extends Phaser.Scene {
    constructor() {
        super('GoodScene');
    }
    init(inputdata) {
        this.data = inputdata;
    }

    preload() {
        this.load.image('GoodBackground1', 'assets/archery3.png');
        this.load.image('GoodBackground2', 'assets/pingpong3.png');
        this.load.image('GoodBackground3', 'assets/shooting3.png');
        this.load.image('GoodBackground4', 'assets/volleyball3.png');
        this.load.image('next', 'assets/next.png');
    }

    create() {
        this.add.image(960, 540, 'GoodBackground' + this.data.athlete);
        let nextButton = this.add.image(1600, 800, 'next');

        nextButton.setInteractive();
        nextButton.on("pointerover", () => {
            nextButton.setScale(1.2, 1.2)
        });
        nextButton.on("pointerout", () => {
            nextButton.setScale(1, 1)
        });
        nextButton.on("pointerup", () => {
            this.data.count = this.data.count + 1;
            this.scene.start('OrderScene', this.data);
        });
    }

    update() {

    }
}