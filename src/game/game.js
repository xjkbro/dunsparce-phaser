import React, { Component } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import FirstGame from "./scene/FirstGame";

class Game extends Component {
    FirstGameState = {
        initialize: true,
        game: {
            type: Phaser.AUTO,
            autoCenter: true,
            width: 800,
            height: 600,
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 200 },
                },
            },
            scene: FirstGame,
        },
    };

    render() {
        return (
            <>
                <IonPhaser
                    game={this.FirstGameState.game}
                    initialize={this.FirstGameState.initialize}
                />
            </>
        );
    }
}

export default Game;
