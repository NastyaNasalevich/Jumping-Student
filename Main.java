package com.company;

import java.util.ArrayList;

public class Main {

    public static class Steps {

        int meaning;
        ArrayList<Integer> jumps = new ArrayList<>();
        boolean isStep = false;
    }

    public static void fillingIn(int[] nums, ArrayList<Steps> steps) {

        for(int i =0; i<nums.length; i++)
        {
            steps.add(new Steps());
            steps.get(i).meaning = nums[i];
        }
    }

    public static boolean test(int[] nums, ArrayList<Steps> steps) {

        if (nums.length < 2 || nums[0] != 0) {
            System.out.println(false);

            return false;
        }
        else {

            steps.get(1).jumps.add(1);
            steps.get(1).isStep = true;

            boolean isTrue = false;

            for (int i = 1; i < nums.length; i++) {
                for (int j = 0; j < steps.get(i).jumps.size(); j++) {

                    for (int k = i; k < steps.size(); k++) {

                        if (steps.get(i).jumps.get(j) == steps.get(k).meaning - steps.get(i).meaning) {
                            steps.get(k).isStep = true;
                            steps.get(k).jumps.add(steps.get(i).jumps.get(j));
                        }
                        if (steps.get(i).jumps.get(j) + 1 == steps.get(k).meaning - steps.get(i).meaning) {
                            steps.get(k).isStep = true;
                            steps.get(k).jumps.add(steps.get(i).jumps.get(j) + 1);
                        }
                        if (steps.get(i).jumps.get(j) - 1 == steps.get(k).meaning - steps.get(i).meaning && steps.get(i).jumps.get(j) - 1 != 0) {
                            steps.get(k).isStep = true;
                            steps.get(k).jumps.add(steps.get(i).jumps.get(j) - 1);
                        }
                    }
                }
            }
            if (steps.get(nums.length - 1).isStep == true) {
                isTrue = true;
            }

            System.out.println(isTrue);

            return isTrue;
        }
    }

    public static void main(String[] args) {

        ArrayList<Steps> steps = new ArrayList<>();

        fillingIn(new int[]{0, 1, 3, 5, 6, 8, 12, 17}, steps);
        test(new int[]{0, 1, 3, 5, 6, 8, 12, 17}, steps);
        steps.clear();

        fillingIn(new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15}, steps);
        test(new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 15}, steps);
        steps.clear();

        fillingIn(new int[]{0, 1, 2, 3, 4, 8, 9, 11}, steps);
        test(new int[]{0, 1, 2, 3, 4, 8, 9, 11}, steps);
        steps.clear();

        fillingIn(new int[]{1}, steps);
        test(new int[]{1}, steps);
        steps.clear();

        fillingIn(new int[]{0}, steps);
        test(new int[]{0}, steps);
        steps.clear();

        fillingIn(new int[]{1, 2}, steps);
        test(new int[]{1, 2}, steps);
        steps.clear();

        fillingIn(new int[]{0, 1, 3, 5, -1, 8, 12, 17}, steps);
        test(new int[]{0, 1, 3, 5, -1, 8, 12, 17}, steps);
        steps.clear();
    }
}
