import React, { Component } from "react";
import Phaser from "phaser";
import { WebFontLoaderPlugin } from "phaser3-webfont-loader";
import { IonPhaser } from "@ion-phaser/react";
import FirstGame from "./scene/FirstGame";
import Dunsparce from "./scene/Dunsparce";

class Game extends Component {
    state = {
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
            scene: [Dunsparce],
            plugins: {
                global: [
                    {
                        key: "WebFontLoader",
                        plugin: WebFontLoaderPlugin,
                        start: true,
                    },
                ],
            },
        },
    };

    render() {
        return (
            <>
                <IonPhaser
                    game={this.state.game}
                    initialize={this.state.initialize}
                />
            </>
        );
    }
}

export default Game;
