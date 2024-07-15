function findLongestWord(str) {
    const words = str.split(/\s+/);
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));