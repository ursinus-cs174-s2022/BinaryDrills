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
    
    public static void main(String[] args) {
        shiftExample();
        XOREncryptionExample();
    }
}
