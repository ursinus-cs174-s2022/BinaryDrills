
/**
 * 
 * @param {int} x A number in base 10
 * @returns A binary string representing x
 */
function base10ToBinary(x) {
    let rem = x;
    let b = "";
    let place = 2;
    do {
        if (rem%place == 0) {
            b = "0" + b;
        }
        else {
            b = "1" + b;
        }
        rem -= rem%place;
        place *= 2;
    }
    while (rem > 0);
    return b;
}

/**
 * 
 * @param {string} b A binary string
 * @returns An int corresponding to the binary string
 */
function binaryToBase10(b) {
    let s = b.split("").reverse().join("");
    let place = 1;
    let x = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "1") {
            x += place;
        }
        place *= 2;
    }
    return x;
}

/**
 * 
 * @param {string} b A binary string
 * @returns The HTML code to create a table showing the number
 *          in binary with its places
 */
function makeBinaryTableStr(b) {
    let s = "";
    s += "<table border = 1 cellpadding=10><tr>";
    let place = Math.pow(2, b.length-1);
    for (let i = 0; i < b.length; i++) {
        s += "<td><h3>" + place + "</h3></td>";
        place /= 2;
    }
    s += "</tr><tr>";
    for (let i = 0; i < b.length; i++) {
        s += "<td><h3>" + b[i] + "</h3></td>";
    }
    s += "</tr></table>";
    return s;
}

/**
 * 
 * @param {string} b A binary string
 * Make the HTML code showing how to convert a binary string to base 10
 */
function makeShowBinarySumStr(b) {
    let s = "<h2>";
    place = Math.pow(2, b.length-1);
    for (let i = 0; i < b.length; i++) {
        s += "<font color=red>" + b[i] + "</font>*<font color=green>" + place+"</font>";
        if (i < b.length - 1) {
            s += "+ ";
        }
        else {
            s += " = ";
        }
        place /= 2;
    }
    s + "</code><BR>"
    s += "<b>" + binaryToBase10(b) + "</b></h2>";
    return s;
}












HEX_VALS = "0123456789ABCDEF";
HEX_VAL_TO_NUM = {};
for (let i = 0; i < 10; i++) {
    HEX_VAL_TO_NUM[""+i] = i;
}
HEX_VAL_TO_NUM["A"] = 10;
HEX_VAL_TO_NUM["B"] = 11;
HEX_VAL_TO_NUM["C"] = 12;
HEX_VAL_TO_NUM["D"] = 13;
HEX_VAL_TO_NUM["E"] = 14;
HEX_VAL_TO_NUM["F"] = 15;

/**
 * 
 * @param {int} x A number in base 10
 * @returns A hex string corresponding to x 
 */
function base10ToHex(x) {
    let rem = x;
    let b = "";
    let place = 16;
    do {
        let val = (rem%place)/(place/16);
        b = HEX_VALS[val] + b;
        rem -= rem%place;
        place *= 16;
    }
    while (rem > 0);
    return b;
}

/**
 * 
 * @param {string} h A hex string
 * @returns An int corresponding to this hex string
 */
function hexToBase10(h) {
    let s = h.split("").reverse().join("");
    let place = 1;
    let x = 0;
    for (let i = 0; i < s.length; i++) {
        x += HEX_VAL_TO_NUM[s[i]]*place;
        place *= 16;
    }
    return x;
}

/**
 * 
 * @param {string} h A hex string
 * @returns HTML code for a table showing how to convert this to base 10
 */
function makeHexTableStr(h) {
    let s = "";
    s += "<table border = 1 cellpadding=10><tr>";
    let place = Math.pow(16, h.length-1);
    for (let i = 0; i < h.length; i++) {
        s += "<td><h3>" + place + "</h3></td>";
        place /= 16;
    }
    s += "</tr><tr>";
    for (let i = 0; i < h.length; i++) {
        s += "<td><h3>" + h[i] + "</h3></td>";
    }
    s += "</tr></table>";
    return s;
}

/**
 * 
 * @param {string} h A hex string
 * @returns HTML code showing how to sum up places to convert this
 *          to base 10
 */
function makeShowHexSumStr(h) {
    let x = hexToBase10(h);
    let s = "<h2>";
    let place = Math.pow(16, h.length-1);
    let hasLetters = false;
    for (let i = 0; i < h.length; i++) {
        if (HEX_VAL_TO_NUM[h[i]] > 9) {
            hasLetters = true;
        }
        s += "<font color=red>" + h[i] + "</font>*<font color=green>" + place+"</font>";
        if (i < h.length - 1) {
            s += "+ ";
        }
        else {
            s += " = ";
        }
        place /= 16;
    }
    s + "</code><BR>"
    s += "<b>" + x + "</b></h2>";

    // If there are letters in it, show an extra line to convert
    // the letters to numbers
    if (hasLetters) {
        s += "In other words...<h2>"
        place = Math.pow(16, h.length-1);
        for (let i = 0; i < h.length; i++) {
            s += "<font color=red>" + HEX_VAL_TO_NUM[h[i]] + "</font>*<font color=green>" + place+"</font>";
            if (i < h.length - 1) {
                s += "+ ";
            }
            else {
                s += " = ";
            }
            place /= 16;
        }
        s + "</code><BR>"
        s += "<b>" + x + "</b></h2><BR>";
    }
    return s;
}






/**
 * 
 * @param {string} b A binary string
 * @returns The corresponding hext string
 */
function binaryToHex(b) {
    let x = binaryToBase10(b);
    return base10ToHex(x);
}

/**
 * 
 * @param {string} h A hex string
 * @returns The corresponding binary string
 */
function hexToBinary(h) {
    let x = hexToBase10(h);
    return base10ToBinary(x);
}

/**
 * 
 * @param {string} h A hex string
 * @returns A string with HTML code to create a table showing
 *          how to convert each hexadecimal digit to bits
 *          4 bits at a time 
 */
function makeHexBinaryTableStr(h) {
    let s = "";
    s += "<table border = 1 cellpadding=10><tr>";
    for (let i = 0; i < h.length; i++) {
        s += "<td><h3>" + h[i] + "</h3></td>";
    }
    s += "</tr><tr>";
    for (let i = 0; i < h.length; i++) {
        s += "<td><h3>";
        let b = hexToBinary(h[i]);
        for (let j = 0; j < 4-b.length; j++) {
            s += "0";
        }
        for (let j = 0; j < b.length; j++) {
            s += b[j];
        }
        s += "</h3></td>";
    }
    s += "</tr></table>";
    return s;
}