export default class MakeScene extends Phaser.Scene {
    constructor() {
        super('MakeScene');
    }

    init(inputdata) {
        this.data = inputdata;
    }

    preload() {
        this.load.image('makeBackground', 'assets/make_background.png');
        this.load.image('finishButton', 'assets/making_finish.png');
        this.load.image('bacon', 'assets/bacon.png');
        this.load.image('tuna', 'assets/tuna.png');
        this.load.image('kimchi', 'assets/kimchi.png');
        this.load.image('egg', 'assets/egg.png');
        this.load.image('cheese', 'assets/cheese.png');
        this.load.image('lettuce', 'assets/lettuce.png');
        this.load.image('onion', 'assets/onion.png');
        this.load.image('wasabi', 'assets/wasabi.png');
        this.load.image('ketchup', 'assets/ketchup.png');
        this.load.image('mustard', 'assets/mustard.png');
        
    }

    create() {
        this.add.image(960, 540, 'makeBackground');

        var ingredients = new Array();
        ingredients[0] = this.add.image(0, 0, 'bacon');
        ingredients[1] = this.add.image(0, 0, 'tuna');
        ingredients[2] = this.add.image(0, 0, 'kimchi');
        ingredients[3] = this.add.image(0, 0, 'egg').setScale(0.8, 0.8);
        ingredients[4] = this.add.image(0, 0, 'cheese');
        ingredients[5] = this.add.image(0, 0, 'lettuce');
        ingredients[6] = this.add.image(0, 0, 'onion');
        ingredients[7] = this.add.image(0, 0, 'wasabi');
        ingredients[8] = this.add.image(0, 0, 'ketchup');
        ingredients[9] = this.add.image(0, 0, 'mustard');

        var container = new Array();

        container[0] = this.add.container(630, 255, ingredients[0]);
        container[1] = this.add.container(280, 255, ingredients[1]);
        container[2] = this.add.container(955, 255, ingredients[2]);
        container[3] = this.add.container(1300, 255, ingredients[3]);
        container[4] = this.add.container(1655, 255, ingredients[4]);
        container[5] = this.add.container(1700, 630, ingredients[5]);
        container[6] = this.add.container(1700, 890, ingredients[6]);
        container[7] = this.add.container(200, 525, ingredients[7]);
        container[8] = this.add.container(200, 700, ingredients[8]);
        container[9] = this.add.container(200, 925, ingredients[9]);


        for (var i = 0; i < 10; i++) {
            container[i].setSize(ingredients[i].width*0.9, ingredients[i].height*0.9);
            container[i].setInteractive();
            this.input.setDraggable(container[i]);
            this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });
        }

        var localdata = {
            ingredients: [false, false, false, false, false, false, false, false, false, false],
            food_stat: false,
            count: 0,
            time: 5
        }
        var depthArray = container;
        container[0].on('pointerover', function() {
            ingredients[0].setScale(1.2, 1.2);
        });
        container[0].on('pointerout', function() {
            ingredients[0].setScale(1, 1);
            var tempcontainer = container[0];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[0] = true;
            } else {
                tempcontainer.x = 630;
                tempcontainer.y = 255;
                localdata.ingredients[0] = false;
            }
        });
        container[1].on('pointerover', function() {
            ingredients[1].setScale(1.2, 1.2);

        });
        container[1].on('pointerout', function() {
            ingredients[1].setScale(1, 1);
            var tempcontainer = container[1];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[1] = true;
            } else {
                tempcontainer.x = 280;
                tempcontainer.y = 255;
                localdata.ingredients[1] = false;
            }
        });
        container[2].on('pointerover', function() {
            ingredients[2].setScale(1.2, 1.2);
        });
        container[2].on('pointerout', function() {
            ingredients[2].setScale(1, 1);
            var tempcontainer = container[2];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[2] = true;
            } else {
                tempcontainer.x = 955;
                tempcontainer.y = 255;
                localdata.ingredients[2] = false;
            }
        });
        container[3].on('pointerover', function() {
            ingredients[3].setScale(1, 1);
        });
        container[3].on('pointerout', function() {
            ingredients[3].setScale(0.8, 0.8);

            var tempcontainer = container[3];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[3] = true;
            } else {
                tempcontainer.x = 1300;
                tempcontainer.y = 255;
                localdata.ingredients[3] = false;
            }
        });
        container[4].on('pointerover', function() {
            ingredients[4].setScale(1.2, 1.2);
        });
        container[4].on('pointerout', function() {
            ingredients[4].setScale(1, 1);

            var tempcontainer = container[4];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[4] = true;
            } else {
                tempcontainer.x = 1655;
                tempcontainer.y = 255;
                localdata.ingredients[4] = false;
            }
        });
        container[5].on('pointerover', function() {
            ingredients[5].setScale(1.2, 1.2);
        });
        container[5].on('pointerout', function() {
            ingredients[5].setScale(1, 1);
            var tempcontainer = container[5];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[5] = true;
            } else {
                tempcontainer.x = 1700;
                tempcontainer.y = 630;
                localdata.ingredients[5] = false;
            }
        });
        container[6].on('pointerover', function() {
            ingredients[6].setScale(1.2, 1.2);
        });
        container[6].on('pointerout', function() {
            ingredients[6].setScale(1, 1);
            var tempcontainer = container[6];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[6] = true;
            } else {
                tempcontainer.x = 1700;
                tempcontainer.y = 890;
                localdata.ingredients[6] = false;
            }
        });
        container[7].on('pointerover', function() {
            ingredients[7].setScale(1.2, 1.2);
        });
        container[7].on('pointerout', function() {
            ingredients[7].setScale(1, 1);
            var tempcontainer = container[7];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[7] = true;
            } else {
                tempcontainer.x = 200;
                tempcontainer.y = 525;
                localdata.ingredients[7] = false;
            }
        });
        container[8].on('pointerover', function() {
            ingredients[8].setScale(1.2, 1.2);
        });
        container[8].on('pointerout', function() {
            ingredients[8].setScale(1, 1);
            var tempcontainer = container[8];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[8] = true;
            } else {
                tempcontainer.x = 200;
                tempcontainer.y = 700;
                localdata.ingredients[8] = false;
            }
        });
        container[9].on('pointerover', function() {
            ingredients[9].setScale(1.2, 1.2);
        });
        container[9].on('pointerout', function() {
            ingredients[9].setScale(1, 1);
            var tempcontainer = container[9];
            if (800 < tempcontainer.x && tempcontainer.x < 1100 && 600 < tempcontainer.y && tempcontainer.y < 820) {
                localdata.ingredients[9] = true;
            } else {
                tempcontainer.x = 200;
                tempcontainer.y = 925;
                localdata.ingredients[9] = false;
            }
        });

        let finishButton = this.add.image(960, 1000, 'finishButton').setScale(0.7, 0.7);

        finishButton.setInteractive();
        finishButton.on("pointerover", () => {
            finishButton.setScale(1, 1)
        });
        finishButton.on("pointerout", () => {
            finishButton.setScale(0.7, 0.7)
        });
        finishButton.on("pointerup", () => {

            for (var i = 0; i < 10; i++) {
                if (this.data.ingredients[i] != localdata.ingredients[i]) {
                    this.data.food_stat = 0;
                    break;
                }
            }
            this.scene.start('ServeScene', this.data);
        });
    }

    update() {

    }
}