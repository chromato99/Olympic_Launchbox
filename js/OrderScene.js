export default class OrderScene extends Phaser.Scene {
    constructor() {
        super('OrderScene');
    }

    init(inputdata) {
        this.data = inputdata;
        
    }

    preload() {
        this.load.image('orderBackground1', 'assets/archery2.png');
        this.load.image('orderBackground2', 'assets/pingpong2.png');
        this.load.image('orderBackground3', 'assets/shooting2.png');
        this.load.image('orderBackground4', 'assets/volleyball2.png');
        this.load.image('acceptButton', 'assets/yes.png');
    }

    create() {

        this.data.athlete = Math.floor(Math.random() * 4) + 1;
    
        this.add.image(960, 540, 'orderBackground' + this.data.athlete);
        let acceptButton = this.add.image(1240, 337, 'acceptButton').setScale(0.7, 0.7);
        let order_conversation = '';


        for (var i = 0; i < 10; i++) {
            this.data.ingredients[i] = false;
        }
        this.data.food_stat = 1;
        var ingredients_count = 3;
        if (this.data.count > 8) {
            this.data.time = 1;
            ingredients_count = 5;
        } else if (this.data.count > 6) {
            this.data.time = 2;
            ingredients_count = 5;
        } else if (this.data.count > 4) {
            this.data.time = 3;
            ingredients_count = 5;
        } else if (this.data.count > 2) {
            this.data.time = 3;
            ingredients_count = 4;
        } else if (this.data.count > 1) {
            this.data.time = 4;
        }

        while (ingredients_count > 0) {
            var ingredient_number = Math.floor(Math.random() * 10);
            if (this.data.ingredients[ingredient_number] == true) {
                continue;
            } else {
                this.data.ingredients[ingredient_number] = true;
                ingredients_count--;
            }
        }

        if (this.data.ingredients[0] == true) {
            order_conversation += '베이컨 ';
        }
        if (this.data.ingredients[1] == true) {
            order_conversation += '참치 ';
        }
        if (this.data.ingredients[2] == true) {
            order_conversation += '볶음김치 ';
        }
        if (this.data.ingredients[3] == true) {
            order_conversation += '계란 ';
        }
        if (this.data.ingredients[4] == true) {
            order_conversation += '치즈 ';
        }
        if (this.data.ingredients[5] == true) {
            order_conversation += '상추 ';
        }
        if (this.data.ingredients[6] == true) {
            order_conversation += '양파 ';
        }
        if (this.data.ingredients[7] == true) {
            order_conversation += '와사비소스 ';
        }
        if (this.data.ingredients[8] == true) {
            order_conversation += '케첩 ';
        }
        if (this.data.ingredients[9] == true) {
            order_conversation += '머스타드 ';
        }

        order_conversation += '넣어 주세요!!';
        this.timetext = this.add.text(1500, 800, 'Time: ' + this.data.time, { fontSize: '60px', fill: '#ff0000' });
        let text = this.add.text(490, 180, order_conversation, { fontFamily: 'Arial', fontSize: '36px', fill: '#000000' });

        this.timedEvent = this.time.addEvent({ delay: 1000, repeat: 5 });

        acceptButton.setInteractive();
        acceptButton.on("pointerover", () => {
            acceptButton.setScale(1.0, 1.0)
        });
        acceptButton.on("pointerout", () => {
            acceptButton.setScale(0.7, 0.7)
        });
        acceptButton.on("pointerup", () => {
            this.timedEvent.remove(false);
            this.scene.start('MakeScene', this.data);
        });
    }

    update() {
        this.timecount = this.timedEvent.repeatCount + this.data.time - 5;
        this.timetext.setText('Time: ' + this.timecount);

        if (this.timecount == 0) {
            this.timedEvent.remove(false);
            this.scene.start('MakeScene', this.data);
        }
    }

}