import "./App.css";
import Game from "./game/game";
import NavBar from "./components/NavBar";
import FlappyDunsparce from "./components/FlappyDunsparce";
import HowToPlay from "./components/HowToPlay";
import Controls from "./components/Controls";
import MeetTheTeam from "./components/MeetTheTeam";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Thoughts from "./components/Thoughts";

function App() {
    const [playGame, setPlayGame] = useState(false);
    return (
        <>
            <div className="App">
                <div className="line" />
                <NavBar />
                <FlappyDunsparce
                    playGame={playGame}
                    setPlayGame={setPlayGame}
                />
                <HowToPlay />
                <Controls />
                <Thoughts />
                <MeetTheTeam />
                <Footer />
            </div>
        </>
    );
}

export default App;
