export default class OpeningScene extends Phaser.Scene {
    constructor() {
        super('OpeningScene');
    }

    preload() {
        this.load.image('openingBackground', 'assets/opening.png');
    }

    create() {
        this.add.image(960, 540, 'openingBackground');
        console.log("Opening");
        this.cameras.main.once('camerafadeincomplete', function (camera) {
            camera.fadeOut(1000);
        });
        this.cameras.main.fadeIn(1000);
        this.timedEvent = this.time.addEvent({ delay: 1000, repeat: 2 });
    }

    update() {
        if (this.timedEvent.repeatCount == 0) {
            this.timedEvent.remove(false);
            this.scene.start('MainMenu');
        }
    }
}