import React, { useState, createContext } from 'react';

export const PianoControlsContext = createContext();

export const PianoControlsProvider = (props) => {
    const [ showKeyBindings, setShowKeyBindings ] = useState(true);
    const [ showNotes, setShowNotes ] = useState(false);
    const [ sustain, setSustain ] = useState(true);

    return (
        <PianoControlsContext.Provider value={{
            controls: {showKeyBindings, showNotes, sustain},
            setters: {setShowKeyBindings, setShowNotes, setSustain}
        }}>
            {props.children}
        </PianoControlsContext.Provider>
    );
};