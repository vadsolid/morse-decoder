const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    outputLine = '';
    for (i = 0; i < expr.length; i = i + 10){
        let signal = expr.slice(i, i+10);
        if (signal === '**********') {
            outputLine = outputLine + ' ';
        } else {
            conversion = ''
            for (j = 0; j < signal.length; j = j +2){
                let elem = signal.slice(j, j + 2);
                if (elem === '10') {
                    conversion = conversion + '.'
                } else if (elem === '11') {
                    conversion = conversion + '-'
                }
            }
            outputLine = outputLine + MORSE_TABLE[conversion];
        }
    }
    return outputLine;
}

module.exports = {
    decode
}