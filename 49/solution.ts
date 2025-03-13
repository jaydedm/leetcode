/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map()
  for (const word of strs) {
    const sortedAnagramKey = word.split('').sort().join('')
    if (!map[sortedAnagramKey]) {
      map[sortedAnagramKey] = []
    }
    map[sortedAnagramKey].push(word)
  }
  return [...Object.values(map)]
}
