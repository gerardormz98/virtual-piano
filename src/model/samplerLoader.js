import * as Tone from 'tone';
import A0 from "../assets/samples/A0.mp3";
import A1 from "../assets/samples/A1.mp3";
import A2 from "../assets/samples/A2.mp3";
import A3 from "../assets/samples/A3.mp3";
import A4 from "../assets/samples/A4.mp3";
import A5 from "../assets/samples/A5.mp3";
import A6 from "../assets/samples/A6.mp3";
import A7 from "../assets/samples/A7.mp3";
import C1 from "../assets/samples/C1.mp3";
import C2 from "../assets/samples/C2.mp3";
import C3 from "../assets/samples/C3.mp3";
import C4 from "../assets/samples/C4.mp3";
import C5 from "../assets/samples/C5.mp3";
import C6 from "../assets/samples/C6.mp3";
import C7 from "../assets/samples/C7.mp3";
import Ds1 from "../assets/samples/Ds1.mp3";
import Ds2 from "../assets/samples/Ds2.mp3";
import Ds3 from "../assets/samples/Ds3.mp3";
import Ds4 from "../assets/samples/Ds4.mp3";
import Ds5 from "../assets/samples/Ds5.mp3";
import Ds6 from "../assets/samples/Ds6.mp3";
import Ds7 from "../assets/samples/Ds7.mp3";
import Fs1 from "../assets/samples/Fs1.mp3";
import Fs2 from "../assets/samples/Fs2.mp3";
import Fs3 from "../assets/samples/Fs3.mp3";
import Fs4 from "../assets/samples/Fs4.mp3";
import Fs5 from "../assets/samples/Fs5.mp3";
import Fs6 from "../assets/samples/Fs6.mp3";
import Fs7 from "../assets/samples/Fs7.mp3";

const sampler = new Tone.Sampler(
    {
        "A0": A0,
        "A1": A1,
        "A2": A2,
        "A3": A3,
        "A4": A4,
        "A5": A5,
        "A6": A6,
        "A7": A7,
        "C1": C1,
        "C2": C2,
        "C3": C3,
        "C4": C4,
        "C5": C5,
        "C6": C6,
        "C7": C7,
        "D#1": Ds1,
        "D#2": Ds2,
        "D#3": Ds3,
        "D#4": Ds4,
        "D#5": Ds5,
        "D#6": Ds6,
        "D#7": Ds7,
        "F#1": Fs1,
        "F#2": Fs2,
        "F#3": Fs3,
        "F#4": Fs4,
        "F#5": Fs5,
        "F#6": Fs6,
        "F#7": Fs7
    },
    {
        release: 1,
        onload: () => {
            console.log("Sampler loaded!");
        }
    }
).toDestination();

export default sampler;