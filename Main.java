package com.company;

public class Main {

    public static boolean test(int[] nums) {
        int previousStep = 1;
        boolean isJump = false;

        if (nums[0] == 0 && nums.length >= 2) {
            for (int i = 0; i < nums.length - 1; i++) {
                boolean isNext = false;
                for (int j = 1; !isNext && j < nums.length - i; j++) {
                    if (nums[i + j] - nums[i] == previousStep || nums[i + j] - nums[i] == previousStep + 1 || nums[i + j] - nums[i] == previousStep - 1) {
                        previousStep = nums[i + j] - nums[i];
                        i+= j-1;
                        isNext = true;
                    }
                    else isNext = false;
                }
                if (isNext == false) {
                    isJump = false;
                    break;
                }
                isJump = true;
            }
        }
        System.out.println(isJump);
        return isJump;
    }

    public static void main(String[] args) {
        test(new int[]{0, 1, 3, 5, 8, 12, 17});
        test(new int[]{0, 1, 2, 3, 4, 9, 11});
        test(new int[]{0});
        test(new int[]{1});
        test(new int[]{0, 1, 3, 5, -1, 8, 12, 17});
    }
}
