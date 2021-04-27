import React, { useEffect, useState, useContext } from "react";
import Sketch from "react-p5";
import usePiano from "../hooks/usePiano";
import { PianoControlsContext } from "../context/PianoControlsContext";
import { PRESS_METHOD } from "../utils/constants";
import { keyCodeToIndex } from "../utils/utils";

const PianoSketch = () => {
    const [ p5, setP5 ] = useState(null);
    const [ canvas, setCanvas ] = useState(null);
    const [ isUsingTouch, setIsUsingTouch ] = useState(false);
    const pianoControlsContext = useContext(PianoControlsContext);
    const piano = usePiano(pianoControlsContext.controls);

    useEffect(() => {
        setIsUsingTouch(false);

        if (p5) {
            p5.resizeCanvas(piano.width, piano.height);
        }
    }, [piano, p5]);

    const setup = (p5, canvasParentRef) => {
        setP5(p5);
		setCanvas(p5.createCanvas(piano.width, piano.height).parent(canvasParentRef));
	};

	const draw = (p5) => {
		p5.background(55, 55, 55);
        piano.drawKeys(p5);
	};

    const onKeyPressed = (e) => {
        if (piano) {
            if (e.key === "Escape") {
                pianoControlsContext.setters.setSustain(true);
            }
            else {
                piano.pressKey(keyCodeToIndex(e.keyCode, piano.initialKeyMappingOctave), PRESS_METHOD.KEYBOARD);
            }
        }
    };
    
    const onKeyReleased = (e) => {
        if (piano) {
            if (e.key === "Escape") {
                pianoControlsContext.setters.setSustain(false);
            }
            else {
                piano.releaseKey(keyCodeToIndex(e.keyCode, piano.initialKeyMappingOctave), PRESS_METHOD.KEYBOARD);
            }
        }
    };

    const onMousePressed = (e, event) => {
        // Hack, touch fires two events (touchstart and mousedown).
        if (event.type === 'touchstart') setIsUsingTouch(true);
        if (isUsingTouch && event.type === 'mousedown') return;

        if (canvas && piano) {
            const x = e.mouseX - canvas.canvas.clientLeft;
            const y = e.mouseY - canvas.canvas.clientTop;
            
            piano.onClicked(x, y);
        }
    };

    const onMouseReleased = () => {
        if (piano) {
            piano.onClickReleased();
        }
    };

    return  <Sketch 
                setup={setup} 
                draw={draw} 
                keyPressed={onKeyPressed} 
                keyReleased={onKeyReleased} 
                mousePressed={onMousePressed} 
                mouseReleased={onMouseReleased}
                touchStarted={null}
                touchEnded={null}
            />;
};

export default PianoSketch;