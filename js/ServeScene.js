export default class ServeScene extends Phaser.Scene {
    constructor() {
        super('ServeScene');
    }
    init(inputdata) {
        this.data = inputdata;
    }

    preload() {
        this.load.image('serveBackground1', 'assets/archery1.png');
        this.load.image('serveBackground2', 'assets/pingpong1.png');
        this.load.image('serveBackground3', 'assets/shooting1.png');
        this.load.image('serveBackground4', 'assets/volleyball1.png');
        this.load.image('bapburger', 'assets/bapburger.png');
    }

    create() {
        this.add.image(960, 540, 'serveBackground' + this.data.athlete);

        var bapburger = this.add.image(0, 0, 'bapburger');
        this.bapburgerContainer = this.add.container(1700, 900, bapburger);
        var bapcontainer = this.bapburgerContainer
        this.bapburgerContainer.setSize(bapburger.width, bapburger.height);
        this.bapburgerContainer.setInteractive();
        this.input.setDraggable(this.bapburgerContainer);
        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        bapcontainer.on('pointerover', function() {
            bapburger.setScale(1.2, 1.2);

        });
        bapcontainer.on('pointerout', function() {
            bapburger.setScale(1, 1);
            if (800 < bapcontainer.x && bapcontainer.x < 1100 && 600 < bapcontainer.y && bapcontainer.y < 820) {

            } else {
                bapcontainer.x = 1700;
                bapcontainer.y = 900;
            }
        });
    }

    update() {
        if (800 < this.bapburgerContainer.x && this.bapburgerContainer.x < 1100 && 600 < this.bapburgerContainer.y && this.bapburgerContainer.y < 820) {
            if (this.data.food_stat == 1) {
                this.scene.start('GoodScene', this.data);
            } else {
                this.scene.start('GameOver', this.data);
            }
        }
    }
}