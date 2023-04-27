import Card from '../helpers/card';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.load.image('cyanCardFront', '/home/croa/projects/multiplayer-card-game/client/src/assets/CyanCardFront.png');
        this.load.image('cyanCardBack', '/home/croa/projects/multiplayer-card-game/client/src/assets/CyanCardBack.png');
        this.load.image('magentaCardFront', '/home/croa/projects/multiplayer-card-game/client/src/assets/MagentaCardFront.png');
        this.load.image('magentaCardBack', '/home/croa/projects/multiplayer-card-game/client/src/assets/MagentaCardBack.png');
    }

    create() {
        this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
	let self = this;

	this.dealCards = () => {
        	for (let i = 0; i < 5; i++) {
                let playerCard = new Card(this);
                playerCard.render(475 + (i * 100), 650, 'cyanCardBack');
            }
    	}

	this.dealText.on('pointerdown', function () {
            self.dealCards();
        })

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#00ffff');
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
    }
    
    update() {
    
    }
}
