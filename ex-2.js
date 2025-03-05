let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter((eachWord) => eachWord.length >= 5);
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
