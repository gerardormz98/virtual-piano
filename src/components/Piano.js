import React from 'react';
import { PianoControlsProvider } from "../context/PianoControlsContext";
import PianoSketch from "./PianoSketch";
import PianoControls from "./PianoControls";

const Piano = () => {
    return (
        <PianoControlsProvider>
            <div className="piano-container">
                <PianoControls />
                <PianoSketch />
            </div>
        </PianoControlsProvider>
    );
};

export default Piano;