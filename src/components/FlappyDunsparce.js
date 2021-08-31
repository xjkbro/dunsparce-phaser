import Game from "../game/game";
import React from "react";

export default function FlappyDunsparce({ playGame, setPlayGame }) {
    return (
        <div className="section" id="about">
            <img
                src="wallpaper.png"
                alt="dunsparce destiny"
                className="display-img"
            />
            <h1 className="display-3 pixel-font">Flappy Dunsparce</h1>
            <p className="lead nunito-font">
                Dunsparce is having an exsitential crisis and is having a hard
                time finding his purpose in this world. With inspiration of th
                infamous mobile game of 2014, Flappy Bird, help Dunsparce flap
                through the Hoenn Region to find his true destiny!
            </p>
            {!playGame ? (
                <button
                    className="btn btn-primary pixel-font mx-auto text-center"
                    onClick={() => setPlayGame(true)}
                >
                    PlayGame
                </button>
            ) : (
                <></>
            )}
            {playGame ? <Game /> : <></>}
        </div>
    );
}
