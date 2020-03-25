package binarypractice;
import java.util.Random;

public class RandomExample {
    public static void main(String[] args) {
        Random rand = new Random();
        rand.setSeed(173);
        for (int i = 0; i < 100; i++) {
            int x = rand.nextInt(100);
            System.out.print(x + " ");
            if (i%20 == 19) {
                System.out.println("");
            }
        }
    }
}
