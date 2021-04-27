import { PRESSED_KEY_COLOR, BLACK_KEY_COLOR, KEY_TEXT_COLOR } from "../utils/constants";
import { keyIndexToKeyBinding } from "../utils/utils";


export default class Key {

    constructor(piano, keyIndex, octave, note){
        this.keyIndex = keyIndex;
        this.octave = octave;
        this.note = note;
        this.isPressed = false;
        this.isPressedByClick = false;
        this.piano = piano;
        this.isWhiteKey = !this.isBlackKey();
        this.xCoord = this.getKeyXCoord();
    }

    drawKey(p5){
        if (this.isWhiteKey){
            this.drawWhiteKey(p5);
        }
        else { 
            this.drawBlackKey(p5);
        }
    }

    drawWhiteKey(p5){
        if (this.isPressed)
            p5.fill(PRESSED_KEY_COLOR);
        else
            p5.fill('#FFF');
    
        p5.rect(this.xCoord, -1, this.piano.whiteKeyWidth, this.piano.whiteKeyHeight, 0, 0, 5, 5);
        
        if (this.piano.controls.showKeyBindings) {
            this.drawKeyBinding(p5, this.piano.whiteKeyWidth, this.piano.whiteKeyHeight);
        }

        if (this.piano.controls.showNotes) {
            this.drawKeyNotes(p5, this.piano.whiteKeyWidth, this.piano.whiteKeyHeight);
        }
    }
    
    drawBlackKey(p5){
        if (this.isPressed)
            p5.fill(PRESSED_KEY_COLOR);
        else
            p5.fill(BLACK_KEY_COLOR);
    
        p5.strokeWeight(2);
        p5.rect(this.xCoord, 0, this.piano.blackKeyWidth, this.piano.blackKeyHeight);
        p5.strokeWeight(1);

        if (this.piano.controls.showKeyBindings) {
            this.drawKeyBinding(p5, this.piano.blackKeyWidth, this.piano.blackKeyHeight);
        }
    }

    drawKeyBinding(p5, keyWidth, keyHeight) {
        this.setTextColor(p5);
        p5.textSize(13);
        p5.text(keyIndexToKeyBinding(this.keyIndex, this.piano.initialKeyMappingOctave), this.xCoord + (keyWidth / 2) - 4.5, keyHeight - 18);
    }

    drawKeyNotes(p5, keyWidth, keyHeight) {
        this.setTextColor(p5);
        p5.textSize(11);
        p5.text(this.note, this.xCoord + (keyWidth / 2) - 7, keyHeight - 40);
    }

    setTextColor(p5) {
        if (this.isPressed)
            p5.fill('#FFF');
        else
            p5.fill(KEY_TEXT_COLOR);
    }

    checkIfClicked(x, y) {
        if (this.isWhiteKey) {
            if (x >= this.xCoord && x < (this.xCoord + this.piano.whiteKeyWidth) && y >= 0 && y < (this.piano.whiteKeyHeight)) {
                return true;
            }
        }
        else {
            if (x >= this.xCoord && x < (this.xCoord + this.piano.blackKeyWidth) && y >= 0 && y < (this.piano.blackKeyHeight)) {
                return true;
            }
        }

        return false;
    }

    isBlackKey(){
        var keyInOctave = this.getKeyInOctave(this.keyIndex);
        switch (keyInOctave){
            case 2:
            case 4:
            case 7:
            case 9:
            case 11:
                return true;
            default:
                return false;
        }
    }

    getKeyInOctave(){
        return (this.keyIndex % 12) + 1;
    }

    getKeyXCoord() {
        let x = 0;
        const keyInOctave = this.getKeyInOctave(this.keyIndex);

        switch (keyInOctave){
            case 2:
                x = this.piano.whiteKeyWidth - (this.piano.blackKeyWidth / 2);
                break;
            case 3:
                x = this.piano.whiteKeyWidth;
                break;
            case 4:
                x = (this.piano.whiteKeyWidth * 2) - (this.piano.blackKeyWidth / 2);
                break;
            case 5:
                x = this.piano.whiteKeyWidth * 2;
                break;
            case 6:
                x = this.piano.whiteKeyWidth * 3;
                break;
            case 7:
                x = (this.piano.whiteKeyWidth * 4) - (this.piano.blackKeyWidth / 2);
                break;
            case 8:
                x = this.piano.whiteKeyWidth * 4;
                break;
            case 9:
                x = (this.piano.whiteKeyWidth * 5) - (this.piano.blackKeyWidth / 2);
                break;
            case 10:
                x = this.piano.whiteKeyWidth * 5;
                break;
            case 11:
                x = (this.piano.whiteKeyWidth * 6) - (this.piano.blackKeyWidth / 2);
                break;
            case 12:
                x = this.piano.whiteKeyWidth * 6;
                break;
            default:
                break;
        }
    
        return x + (Math.floor(this.keyIndex / 12) * this.piano.octaveWidth);
    }
}