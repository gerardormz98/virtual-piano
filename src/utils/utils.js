export const isMobileBrowser = () => {
    let check = false;
    
    // eslint-disable-next-line
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    
    return check;
};

export const keyCodeToIndex = (keyCode, initialOctave = 2) => {
    initialOctave = initialOctave - 1;

    switch (keyCode){
        case 9:
            return (initialOctave * 12) + 0;
        case 49:
            return (initialOctave * 12) + 1;
        case 81:
            return (initialOctave * 12) + 2;
        case 50:
            return (initialOctave * 12) + 3;
        case 87:
            return (initialOctave * 12) + 4;
        case 69:
            return (initialOctave * 12) + 5;
        case 52:
            return (initialOctave * 12) + 6;
        case 82:
            return (initialOctave * 12) + 7;
        case 53:
            return (initialOctave * 12) + 8;
        case 84:
            return (initialOctave * 12) + 9;
        case 54:
            return (initialOctave * 12) + 10;
        case 89:
            return (initialOctave * 12) + 11;

        case 85:
            return (initialOctave * 12) + 12;
        case 56:
            return (initialOctave * 12) + 13;
        case 73:
            return (initialOctave * 12) + 14;
        case 57:
            return (initialOctave * 12) + 15;
        case 79:
            return (initialOctave * 12) + 16;
        case 80:
            return (initialOctave * 12) + 17;
        case 65:
            return (initialOctave * 12) + 18;
        case 90:
            return (initialOctave * 12) + 19;
        case 83:
            return (initialOctave * 12) + 20;
        case 88:
            return (initialOctave * 12) + 21;
        case 68:
            return (initialOctave * 12) + 22;
        case 67:
            return (initialOctave * 12) + 23;

        case 86:
            return (initialOctave * 12) + 24;
        case 71:
            return (initialOctave * 12) + 25;
        case 66:
            return (initialOctave * 12) + 26;
        case 72:
            return (initialOctave * 12) + 27;
        case 78:
            return (initialOctave * 12) + 28;
        case 77:
            return (initialOctave * 12) + 29;
        case 75:
            return (initialOctave * 12) + 30;
        case 188:
            return (initialOctave * 12) + 31;
        case 76:
            return (initialOctave * 12) + 32;
        case 190:
            return (initialOctave * 12) + 33;
        case 186:
            return (initialOctave * 12) + 34;
        case 191:
            return (initialOctave * 12) + 35;

        case 16:
            return (initialOctave * 12) + 36;

        default:
            return null;
    }
}

export const keyIndexToKeyBinding = (keyIndex, initialOctave = 2) => {
    initialOctave = initialOctave - 1;
    const initialIndex = initialOctave * 12;

    switch (keyIndex){
        case initialIndex + 0:
            return '↹';
        case initialIndex + 1:
            return '1'
        case initialIndex + 2:
            return 'Q'
        case initialIndex + 3:
            return '2';
        case initialIndex + 4:
            return 'W'
        case initialIndex + 5:
            return 'E'
        case initialIndex + 6:
            return '4'
        case initialIndex + 7:
            return 'R'
        case initialIndex + 8:
            return '5';
        case initialIndex + 9:
            return 'T'
        case initialIndex + 10:
            return '6'
        case initialIndex + 11:
            return 'Y';

        case initialIndex + 12:
            return 'U'
        case initialIndex + 13:
            return '8';
        case initialIndex + 14:
            return 'I'
        case initialIndex + 15:
            return '9'
        case initialIndex + 16:
            return 'O';
        case initialIndex + 17:
            return 'P'
        case initialIndex + 18:
            return 'A'
        case initialIndex + 19:
            return 'Z'
        case initialIndex + 20:
            return 'S'
        case initialIndex + 21:
            return 'X';
        case initialIndex + 22:
            return 'D'
        case initialIndex + 23:
            return 'C'

        case initialIndex + 24:
            return 'V';
        case initialIndex + 25:
            return 'G'
        case initialIndex + 26:
            return 'B';
        case initialIndex + 27:
            return 'H'
        case initialIndex + 28:
            return 'N'
        case initialIndex + 29:
            return 'M';
        case initialIndex + 30:
            return 'K'
        case initialIndex + 31:
            return ','
        case initialIndex + 32:
            return 'L'
        case initialIndex + 33:
            return '.'
        case initialIndex + 34:
            return ';';
        case initialIndex + 35:
            return '/'

        case initialIndex + 36:
            return '⇧'

        default:
            return '';
    }
}