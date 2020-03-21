
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

function makeShowHexSumStr(h) {
    let s = "<h2>";
    place = Math.pow(16, h.length-1);
    for (let i = 0; i < h.length; i++) {
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
    s += "<b>" + hexToBase10(h) + "</b></h2>";
    return s;
}
