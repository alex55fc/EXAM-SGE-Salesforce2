public with sharing class RandomApex {
    public RandomApex() {

    }

    // Returns a random number between 0 (inclusive) and 1 (exclusive)
    @AuraEnabled
    public static Double random() {
        return Math.random();
    }
}