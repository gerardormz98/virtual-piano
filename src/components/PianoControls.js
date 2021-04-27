import React, { useContext } from 'react';
import { PianoControlsContext } from "../context/PianoControlsContext";
import Switch from "react-switch";

const PianoControls = () => {
    const { controls, setters } = useContext(PianoControlsContext);

    return (
        <div className="piano-container__controls">
            <div className="piano-controls">

                <div className="piano-control">
                    <span className={`piano-control__title piano-control__title--${controls.showNotes ? 'on' : 'off'}`}>~ DISPLAY NOTES ~</span>
                    <Switch onChange={() => setters.setShowNotes(!controls.showNotes)} checked={controls.showNotes} checkedIcon={false} uncheckedIcon={false} height={19} width={40} />
                </div>

                <div className="piano-control">
                    <span className={`piano-control__title piano-control__title--${controls.showKeyBindings ? 'on' : 'off'}`}>~ DISPLAY KEYS ~</span>
                    <Switch onChange={() => setters.setShowKeyBindings(!controls.showKeyBindings)} checked={controls.showKeyBindings} checkedIcon={false} uncheckedIcon={false} height={19} width={40} />
                </div>

                <div className="piano-control">
                    <span className={`piano-control__title piano-control__title--${controls.sustain ? 'on' : 'off'}`}>~ SUSTAIN ~</span>
                    <Switch onChange={() => setters.setSustain(!controls.sustain)} checked={controls.sustain} checkedIcon={false} uncheckedIcon={false} height={19} width={40} />
                </div>
            </div>
        </div>
    );
};

export default PianoControls;