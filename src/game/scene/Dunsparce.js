import Phaser from "phaser";

// CONSTANT VARIABLES
const gameWidth = 800;
const gameHeight = 600;
const GROUND = "ground";
const BACKGROUND = "background";
const BIRD = "bird";
const SKY = "sky";
const FLAP = "flap";
const GLIDE = "glide";
const FRAME_RATE = 10;
const BIRD_VELOCITY = -250;
const GROUND_VELOCITY = 2.5;
const SKY_VELOCITY = 0.6;
const PIPE_VELOCITY = 4;
const FLAP_ANGLE = 25;
const GROUND_HEIGHT = 72;
const SKY_HEIGHT = 0;

const birdyX = gameWidth / 2;
const birdyY = gameHeight / 2;
const pipeGap = 150;
const deltaX = 250;

export default class Dunsparce extends Phaser.Scene {
    constructor() {
        super("dunsparce");
    }

    preload() {
        this.load.image("ground", "assets/ground.png");
        this.load.image("background", "assets/background.png");
        this.load.image("pipe", "assets/blue-pipe-420.png");
        this.load.image("startMsg", "assets/message.png");
        this.load.image("gameover", "assets/gameover2.png");
        this.load.image("sky", "assets/skyclouds.png");
        this.load.spritesheet("bird", "assets/Dunsparce72x32.png", {
            frameWidth: 72,
            frameHeight: 32,
        });
        this.load.audio("flap", "sounds/wing.ogg");
        this.load.audio("hit", "sounds/dunsparce_cry.ogg");
        this.load.audio("die", "sounds/die.ogg");
        this.load.audio("score", "sounds/point.ogg");

        // this.load.webfont(
        //     "PressStart2P",
        //     "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Teko:wght@600;700&display=swap"
        // );
    }
    create() {
        // initialize properties that require values on new creation
        this.score = 0;
        this.countPipe = 0;
        this.isPaused = true;
        this.gameOver = false;
        this.isFlapping = false;
        this.sound.setVolume(0.1);

        // start by placing assets to the canvas and the player
        this.createBackground();
        this.sky = this.createSky();
        this.message = this.createMessage("startMsg");
        this.ground = this.createGround();

        this.pipes = this.initialPipes();
        this.scoreText = this.add.text(20, 20, this.score, {
            fontFamily: "Cooper",
            fontSize: 56,
            color: "#fff",
            stroke: "#000",
            strokeThickness: 2,
        });

        this.createPlayer();

        this.cursors = this.input.keyboard.createCursorKeys();
        this.player.body.setGravityY(300);
        this.player.body.setSize(35, 15);
        this.player.setScale(0.7);
        this.physics.add.existing(this.ground, true);
        this.physics.add.collider(
            this.player,
            this.pipes,
            this.collision,
            null,
            this
        );
        this.physics.add.collider(
            this.player,
            this.ground,
            this.collision,
            null,
            this
        );
    }
    update() {
        if (!this.gameOver) {
            this.handleFlaps();
            this.moveGround();
            if (!this.isPaused) {
                this.player.angle += 1.2;
                this.infinitePipes();
            }
        } else if (this.cursors.space.isDown) {
            this.scene.restart();
        }
    }

    handleFlaps() {
        if (
            (this.cursors.space.isDown ||
                this.input.activePointer.primaryDown) &&
            !this.isFlapping
        ) {
            this.isFlapping = true;
            this.flap();
        }
        if (
            this.cursors.space.isUp &&
            !this.input.activePointer.primaryDown &&
            this.isFlapping
        ) {
            this.isFlapping = false;
        }
    }

    flap() {
        // if game is over and space is pressed => restart game
        if (this.cursors.space.isDown && this.gameOver == true) {
            this.scene.restart();
        }
        // if game is not over, look for space press or left mouse click to flap.
        if (
            this.cursors.space.isDown ||
            (this.input.activePointer.leftButtonDown() &&
                this.gameOver == false)
        ) {
            if (this.isPaused) {
                this.physics.resume();
                this.isPaused = false;
                this.message.visible = false;
            }
            this.sound.play("flap");
            this.player.setVelocityY(BIRD_VELOCITY);
            this.player.anims.play(FLAP, true);
            this.player.angle = -FLAP_ANGLE;
        }
    }
    moveGround() {
        // if game is not over, move ground
        if (!this.gameOver) this.ground.tilePositionX += GROUND_VELOCITY;
        if (!this.gameOver) this.sky.tilePositionX += SKY_VELOCITY;
    }

    infinitePipes() {
        // get the children of the pipe group
        let children = this.pipes.getChildren();

        children.forEach((child) => {
            if (child instanceof Phaser.GameObjects.Sprite) {
                child.refreshBody();
                child.x += -PIPE_VELOCITY;
                // when one set of pipe is just shown
                if (child.x <= gameWidth && !child.drawn) {
                    this.countPipe += 1;
                    child.drawn = true;
                    if (this.countPipe >= 2) {
                        let randoPos = this.randomPipes();
                        this.pipes
                            .create(gameWidth + deltaX, randoPos[0], "pipe")
                            .setScale(1)
                            .refreshBody();
                        this.pipes
                            .create(gameWidth + deltaX, randoPos[1], "pipe")
                            .setScale(1, -1) //flips asset upside down
                            .refreshBody();
                        this.countPipe = 0;
                    }
                }
                // checks if this child is out of canvas and destroys if it is
                if (child.x <= -50) {
                    child.destroy();
                }
                //checks if child has crossed birds position, if so add 1 to score
                if (
                    child.x < birdyX &&
                    !this.gameOver &&
                    child.texture.key == "pipe" &&
                    !child.scored
                ) {
                    //checks
                    child.scored = true;
                    this.score += 0.5;
                    this.scoreText.setText(this.score);
                    this.sound.play("score");
                }
            }
        });
    }
    createBackground() {
        const platforms = this.physics.add.staticGroup();
        const { width, height } = this.scale;
        platforms
            .create(width * 0.2, height * 0.59, BACKGROUND)
            .setScale(1.4)
            .refreshBody();
        platforms
            .create(width * 0.4, height * 0.59, BACKGROUND)
            .setScale(1.4)
            .refreshBody();
        platforms
            .create(width * 0.8, height * 0.59, BACKGROUND)
            .setScale(1.4)
            .refreshBody();
        return platforms;
    }
    initialPipes() {
        let pipes = this.physics.add.staticGroup();
        var pipePos = gameWidth + 2 * deltaX;
        let pos = this.randomPipes();
        // bottom placable at 260+pipeGap to height
        pipes.create(pipePos, pos[0], "pipe").setScale(1).refreshBody();
        pipes.create(pipePos, pos[1], "pipe").setScale(1, -1).refreshBody();
        return pipes;
    }
    createGround() {
        const { width, height } = this.scale;
        const x = width * 0.5;
        const y = height - GROUND_HEIGHT * 0.5;
        const ground = this.add.tileSprite(x, y, width, GROUND_HEIGHT, GROUND);

        return ground;
    }
    createSky() {
        const { width, height } = this.scale;
        const x = width * 0.5;
        const y = height - 185;
        const sky = this.add.tileSprite(x, y, width, SKY_HEIGHT, SKY);

        return sky;
    }
    createMessage(msg) {
        const { width, height } = this.scale;
        return this.add.image(width * 0.5, height * 0.3, msg);
    }
    createPlayer() {
        this.player = this.physics.add.sprite(birdyX, birdyY, "bird");
        // apply collisions
        this.player.setCollideWorldBounds(true);
        this.physics.pause();

        this.anims.create({
            key: FLAP,
            frames: this.anims.generateFrameNumbers(BIRD, { start: 0, end: 2 }),
            frameRate: FRAME_RATE,
            repeat: -1,
        });

        this.anims.create({
            key: GLIDE,
            frames: [{ key: BIRD, frame: 0 }],
            frameRate: FRAME_RATE,
        });
    }
    randomPipes() {
        let safePadding = 90;
        let min = Math.ceil(safePadding + pipeGap / 2);
        let max = Math.floor(gameHeight - safePadding - pipeGap / 2);
        let ran = Math.floor(Math.random() * (max - min + 1)) + min;
        let rantop = ran - (pipeGap / 2 + 200);
        let ranbot = ran + (pipeGap / 2 + 200);
        console.log(ranbot, rantop);
        return [ranbot, rantop];
    }
    collision(player) {
        this.sound.play("hit");
        this.gameIsOver(player);
    }
    gameIsOver(player) {
        this.physics.pause();
        player.setTint(0xff0000);
        this.gameOver = true;
        console.log("GAMEOVER");
        this.createMessage("gameover");
    }
}
