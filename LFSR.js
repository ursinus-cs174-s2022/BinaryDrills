function LSFR(initial, nbits, taps) {
    this.register = initial;
    this.nbits = nbits;
    this.taps = taps;

    /**
     * Return an array of bits
     */
    this.extractBits = function() {
        let bits = [];
        for (let i = 0; i < this.taps.length; i++) {
            if (this.register[taps[i]] == "0") {
                bits.append(0);
            }
            else {
                bits.append(1);
            }
        }
        return bits;
    }
} 
