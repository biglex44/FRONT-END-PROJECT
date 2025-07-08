// Prompt the user to enter a sentence
let sentence = prompt("Enter a sentence ending with a period:");

// Initialize counters
let charCount = 0;
let wordCount = 1;  // Starts at 1 because there's at least one word
let vowelCount = 0;

// Define vowels
let vowels = "aeiouAEIOU";

// Loop through each character
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    charCount++;

    if (char === ' ') {
        wordCount++;
    }

    if (vowels.includes(char)) {
        vowelCount++;
    }
}

// Output the results
console.log("Total number of characters:", charCount);
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);
