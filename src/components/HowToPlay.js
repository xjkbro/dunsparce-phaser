import React from "react";

export default function HowToPlay() {
    return (
        <div className="section" id="howto">
            <h1 className="display-3 pixel-font">How To Play</h1>
            <p className="lead nunito-font">
                The objective of Flappy Dunsparce is to flap and traverse
                through the tubes without touching the tubes or ground. Once you
                touch the ground or a pipe, the game is over. Try to beat the
                developer's highest score of 12. (I know, I should be a pro
                gamer.)
            </p>
            <img src="assets/Animation.gif" alt="" className="snapshot" />
        </div>
    );
}
