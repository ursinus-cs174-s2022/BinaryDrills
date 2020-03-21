
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

function makeShowBinarySumStr(b, x) {
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
    s += "<b>" + x + "</b></h2>";
    return s;
}
