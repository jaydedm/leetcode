# 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

## Intuition:

Brute force solution would be to iterate through the array, and then do more nested iterations to compare each character with those in the following strings. It could be done, but honestly even starting to take this approach for fun becomes a mental doozy in navigating the nested iterations.

## Approach:
Let's rethink this. We know anagrams are a words that contain the exact same letters and occurances of them. We like using objects, or maps, becuase we get those sweet amortized O(1) operations. We could sort each string and that would modify it to be a consistent identifiier for an anagram group. A unique ID means we can use it as an object k, and if we find a conflict, or match, we push the original word to the key of that anagram group.

Then we loop through the object and return the final array

## Complexity:

        - Time Complexity: O(n)
        - Space Complexity O(n)
