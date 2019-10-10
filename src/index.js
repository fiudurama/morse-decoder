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
    let words = expr.split('**********'),
        bit = '',
        encodedBit = '',
        output = '',
        start = 0, end = 2;

    words.forEach(function(word, index) {

        let len = Math.floor(word.length / 2);

        for (let i = 0; i < len; i++) {

            bit = word.slice(start, end);

            if ( bit == 10 ) {
                encodedBit += '.'
            }

            if ( bit == 11 ) {
                encodedBit += '-'
            }

            if ( end % 10 == 0 ) {
                output += MORSE_TABLE[encodedBit];
                encodedBit = '';
            }

            start = end;
            end += 2;
        };

        if ( index != words.length - 1 ) {
            output += ' ';
        }

        start = 0;
        end = 2;
    });

    return output;
}

module.exports = {
    decode
}