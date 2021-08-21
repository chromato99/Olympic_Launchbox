export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.audio('mainbgm', [
            'audio/bgm.ogg',
            'audio/bgm.mp3'
        ]);
        this.load.image('mainBackground', 'assets/main_background.png');
        this.load.image('mainLogo', 'assets/logo.png');
        this.load.image('mainPlaybutton', 'assets/play_button.png');
        this.load.image('mainPlaybuttonHover', 'assets/options_button.png');
    }

    create() {
        console.log('SceneMainMenu');

        this.add.image(960, 540, 'mainBackground');

        let playButton = this.add.image(960, 900, 'mainPlaybutton');

        var mainbgm = this.sound.add('mainbgm');
        this.data = {
            ingredients: [false, false, false, false, false, false, false, false, false, false],
            food_stat: 1,
            count: 0,
            time: 5,
            athlete: 0
        }
        mainbgm.play({
            loop: true
        });

        playButton.setInteractive();

        playButton.on("pointerover", () => {
            playButton.setScale(1.2, 1.2)
        });

        playButton.on("pointerout", () => {
            playButton.setScale(1, 1)
        });

        playButton.on("pointerup", () => {
            this.scene.start('OrderScene', this.data);
        });
    }
}