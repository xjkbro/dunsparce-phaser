import React from "react";
export default function Controls() {
    return (
        <div className="section" id="controls">
            <h1 className="display-3 pixel-font">Controls</h1>
            <p className="lead nunito-font">
                The game's controls are simple. Spacebar{" "}
                <img src="spacebar.png" width={75} /> or Left-Click on your
                mouse <img src="leftclick2.png" width={50} /> will allow you to
                flap, start the game, or reset the game if it's over.{" "}
            </p>
        </div>
    );
}
