import * as Tone from 'tone';
import Key from "./Key";
import sampler from "./samplerLoader";
import { PRESS_METHOD } from "../utils/constants";

export default class Piano {
    constructor(octaves = 3, width, height, controls){
        // Validate octaves (min 3 max 8)
        if (octaves < 3) {
            octaves = 3;
        } 
        else if (octaves > 8) {
            octaves = 8;
        }

        this.octaves = octaves;
        this.initialKeyMappingOctave = this.octaves > 3 ? 2 : 1;
        this.width = width;
        this.height = height;

        this.keys = [];
        this.totalKeys = (octaves * 12) + 1;
        this.whiteKeys = (octaves * 7) + 1;

        this.whiteKeyHeight = height - 1;
        this.whiteKeyWidth = width / this.whiteKeys;

        this.blackKeyWidth = this.whiteKeyWidth * 0.55;
        this.blackKeyHeight = height * 0.65;

        this.octaveWidth = this.whiteKeyWidth * 7;

        this.controls = controls;
        this.sampler = sampler;

        if (!this.controls.sustain) {
            this.sampler.releaseAll();
        }
         
        for(var i = 0; i < this.totalKeys; i++) {
            const currentOctave = Math.ceil((i + 1) / 12);
            const note = this.getNoteByKeyIndex(i);
            this.keys.push(new Key(this, i, currentOctave, note));
        }
    }

    drawKeys(p5) {
        this.keys.filter((key) => key.isWhiteKey).forEach((key) => {
            key.drawKey(p5);
        });

        this.keys.filter((key) => !key.isWhiteKey).forEach((key) => {
            key.drawKey(p5);
        });
    }

    onClicked(x, y) {
        const isBlackKeyClicked = this.keys.filter((key) => !key.isWhiteKey).some((k) => {
            if (k.checkIfClicked(x, y)) {
                k.isPressedByClick = true;
                this.pressKey(k.keyIndex, PRESS_METHOD.CLICK);
                return true;
            }

            return false;
        });

        if (!isBlackKeyClicked) {
            this.keys.filter((key) => key.isWhiteKey).some((k) => {
                if (k.checkIfClicked(x, y)) {
                    k.isPressedByClick = true;
                    this.pressKey(k.keyIndex, PRESS_METHOD.CLICK);
                    return true;
                }

                return false;
            });
        }
    };

    onClickReleased() {
        this.keys.filter((key) => key.isPressed && key.isPressedByClick).forEach((k) => {
            k.isPressedByClick = false;
            this.releaseKey(k.keyIndex);
        });
    };

    pressKey(keyIndex, method = PRESS_METHOD.KEYBOARD) {
        const key = this.keys.find((k) => k.keyIndex === keyIndex && (!k.isPressed || method === PRESS_METHOD.CLICK));

        if (key) {
            key.isPressed = true;
            this.playNote(keyIndex);
        }
    }
    
    releaseKey(keyIndex) {
        const key = this.keys.find((k) => k.keyIndex === keyIndex && k.isPressed);

        if (key) {
            key.isPressed = false;

            if(!this.controls.sustain) {
                this.releaseNote(keyIndex);
            }
        }
    }

    playNote(keyIndex) {
        if (this.sampler.loaded && (keyIndex || keyIndex === 0)) {
            var note = this.getNoteByKeyIndex(keyIndex);
            this.sampler.triggerAttack(note, Tone.context.currentTime, 1);
        }
    }

    releaseNote(keyIndex) {
        if (this.sampler.loaded && (keyIndex || keyIndex === 0)) {
            var note = this.getNoteByKeyIndex(keyIndex);
            this.sampler.triggerRelease(note, Tone.context.currentTime);
        }
    }

    getNoteByKeyIndex(keyIndex) {
        var initialOctave = 1

        if (this.octaves < 4) initialOctave = 3;
        else if (this.octaves < 6) initialOctave = 2;
    
        var keyOctaveIndex = Math.floor((keyIndex / 12));
    
        switch ((keyIndex % 12) + 1){
            case 1:
                return "C" + (initialOctave + keyOctaveIndex);
            case 2:
                return "C#" + (initialOctave + keyOctaveIndex);
            case 3:
                return "D" + (initialOctave + keyOctaveIndex);
            case 4:
                return "D#" + (initialOctave + keyOctaveIndex);
            case 5:
                return "E" + (initialOctave + keyOctaveIndex);
            case 6:
                return "F" + (initialOctave + keyOctaveIndex);
            case 7:
                return "F#" + (initialOctave + keyOctaveIndex);
            case 8:
                return "G" + (initialOctave + keyOctaveIndex);
            case 9:
                return "G#" + (initialOctave + keyOctaveIndex);
            case 10:
                return "A" + (initialOctave + keyOctaveIndex);
            case 11:
                return "A#" + (initialOctave + keyOctaveIndex);
            case 12:
                return "B" + (initialOctave + keyOctaveIndex);
            default:
                return null;
        }
    }
}