# 189. Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
` * @return {void} Do not return anything, modify nums in-place instead.`

## Intuition:

Okay brute force would be some kind of iteration where we're replacing numbers with their new "rotated" index, although we would need some mechanism to store the old values as we would be directly mutating the array do leverage O(1) space.
The most obvious appraoch would be to use a DS to store values and index, modify them, and reconstruct a new array. In fact, this might even be more human readable. But it's certainly not the most effecient, and outside the constraints of our required solution.

So how can we do this in place?

*Hmm...*

## Approach:

I'm going to take an approach similar to working with Linked Lists. When we rotate an array by k, we know that a subsection the length of k from the end are going to be moved to the front of the array, with the rest of the elements outside of that k boundary pushed back behind that subsection that has been moved. We can mimic this pattern by reversing subsections in place. We can create a Linked List-like algorithm to help us reverse the array elements by storing the values we are displacing in temporary variables that will change each iteration.

Again, this approach hinges on the requirement of doing the manipulation IN PLACE. Hear me out. If we didn't care about having multiple Data Structures, we could just splice up the array, break them apart at k index, and switch them around in order and stick them back together into a single array.. Doing it in place is the tricky part. We can user reversals to manipulate the data we need in place, and leverage our access to k to identify "break points" to do the appropriate reversals to get the desired order.

## Complexity:
- Time complexity:  `O(n)`
- Space Complexity: `O(1)`

## Beyond
