import { useState, useEffect } from 'react';
import useWindowDimensions from "./useWindowDimensions";
import { MAX_PIANO_WIDTH } from "../utils/constants";
import Piano from '../model/Piano';

const calcPianoWidth = (windowWidth) => {
    // Substract 30px margin and 30 px borders.
    return Math.min(MAX_PIANO_WIDTH + 30, windowWidth) - 60;
};

const usePiano = (pianoControls) => {
    const [ piano, setPiano ] = useState(null);
    const { windowWidth } = useWindowDimensions();

    useEffect(() => {
        setPiano(new Piano(5, calcPianoWidth(windowWidth), 200, pianoControls));
    }, [windowWidth, pianoControls]);

    return piano;
}
 
export default usePiano;