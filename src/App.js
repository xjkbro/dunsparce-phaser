import "./App.css";
import Game from "./game/game";
import { useState, useEffect } from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Nav</p>
                <Game />
                <p>Content</p>
            </header>
        </div>
    );
}

export default App;
