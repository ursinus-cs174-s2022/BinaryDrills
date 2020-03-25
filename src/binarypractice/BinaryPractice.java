package binarypractice;

public class BinaryPractice {
    /** 
     * Convert an into a string representing its bits
     * @param x A 32-bit int
     * @return A 32-element binary string corresponding to this int
     */
    public static String getIntBitString(int x) {
        return String.format("%32s", Integer.toBinaryString(x)).replace(' ', '0');
    }
    
    public static void shiftExample() {
        int magicNum = 0xF7FA342B;
        System.out.println(getIntBitString(magicNum));
        for (int shift = 1; shift <= 5; shift++) {
            int result = magicNum << shift;
            System.out.println(getIntBitString(result));
        }
    }
    
    public static void XOREncryptionExample() {
        int magicNum = 0xFF173173;
        int pass = 0xAD301301;
        int cipher = magicNum ^ pass;
        int result = cipher ^ pass;
        System.out.println("Magic Number:");
        System.out.println(getIntBitString(magicNum));
        System.out.println("Password:");
        System.out.println(getIntBitString(pass));
        System.out.println("Cipher:");
        System.out.println(getIntBitString(cipher));
        System.out.println("Result:");
        System.out.println(getIntBitString(result));
    }
    
    public static void doEncryptionExample() {
        int x = 0x1234;
        int y = 0xDACA;
        int cipher = x ^ y;
        System.out.println(getIntBitString(x));
        System.out.println(getIntBitString(y));
        System.out.println(getIntBitString(cipher));
    }
    
    /**
     * 
     * @param x  00000000xxxxxxxx
     * @param y  00000000yyyyyyyy
     * @return   xxxxxxxxyyyyyyyy
     */
    public static int putTwoTogether(int x, int y) {
        // Use | and <<
        // Shift x to the left, and then put them together
        // xxxxxxxx00000000
        // 00000000yyyyyyyy
        // xxxxxxxxyyyyyyyy
        int result = x << 8 | y;
        return result;
    }
    
    /**
     * Make the first 8 bits of x zero, no matter what
     * Keep the 24 other bits the same
     * @param x  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     * @return   xxxxxxxxxxxxxxxxxxxxxxxx00000000
     */
    public static int zeroOutFirst8Bits(int x) {
        int result = 0;
        // TODO: Fill this in
        return result;
    }
    
    /**
     * Shift all of the bits in x over to the left 
     * by 1, and move the leftmost bit to be in the 
     * rightmost position
     * Example 8-bit numbers:
     * 11101100  ==>  11011001
     * 11011001  ==>  10110011
     * @param x
     * @return 
     */
    public static int cycleShift(int x) {
        int result = 0;
        // TODO: Fill this in
        return result;
    }
    
    public static void main(String[] args) {
        int x = 0xAD;
        int y = 0xC4;
        System.out.println(getIntBitString(x));
        System.out.println(getIntBitString(y));
        int expResult = 0xADC4;
        int result = putTwoTogether(x, y);
        if (result == expResult) {
            System.out.println("Good job!");
        }
        else {
            System.out.println("Must be a bug somewhere..");
        }
    }
}
