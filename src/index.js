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
   
    var mod_expr = expr.split('');
    let size = 10; 
    let subarray = []; 
    for (let i = 0; i <Math.ceil(mod_expr.length/size); i++){
    subarray[i] = mod_expr.slice((i*size), (i*size) + size);
    }
    for (let j=0; j<subarray.length; j++){
      subarray[j]=String(subarray[j]).replace(/,/g,'').replace(/10/g,'.').replace(/11/g,'-').replace(/0/g,'').replace(/\W{10}/g,' ');
    }
    for (let k=0; k<subarray.length; k++) {
      subarray[k] = MORSE_TABLE[subarray[k]];
    }
    subarray = subarray.join().replace(/,,/g,' ').replace(/,/g,'');
    return subarray;     
}

module.exports = {
    decode
}