# 387. First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

## Intuition:
Let's presume the input is *always* a `string`.

Based on what the problem asks for, I identified __3 key pieces of information__ I need to solve this problem.
I need to track an individual __character__, the __amount of times it occurs__, and the __index__ of the character in the string array.

My first instinct was to use an object, or `Map`, as my data structure, as it can hold the character and its count easily, and all available methods on the map take *consant* time, ensuring efficiency.

I couldn't deduce a way to use a HashMap without iterating through the string twice, which was a smell that there may be a more efficient solution. I tried applying a single pass of the `Sliding Window`, which works in some cases, but ultimately has many problems.

## Approach:
I decided to use a `Map` to store the character. As i iterate through the string, i will add it to the map, or update its count.

After the initial "build" iteration, I will iterate again through the string from the beginning. If I encounter a character with a count of 1, I return the current iterating index. This will be the first unique character. If that never occurs, outside of the loop I will return -1 to meet the criterion.

## Complexity:
- Time complexity:  `O(n)`
- Space Complexity: `O(c)`

Solutions has a time complexity of `O(n)`, dependent on the length of the string.
Iterating through the loop again doesn't affect complexity, as it isn't nested.
Space complexity is constant to the number of unique characters in the string.
In this practical case, there are only 26 characters in the English alphabet.

## Beyond

It would be possible to store an object, rather than just the count, that contains all of the data we need in the original `Map`. While this could be useful in a problem with more complex data needs, this doesn't ultimately save us any necessary iterations. In this case, it would only take up more space, albeit still the same in `big O`.

Happy coding!
