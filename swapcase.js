function swapCase(str) {
    // Define an empty string to store the result
    let swappedStr = '';

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is uppercase
        if (str[i] === str[i].toUpperCase()) {
            // If uppercase, convert to lowercase and append to result string
            swappedStr += str[i].toLowerCase();
        } else {
            // If lowercase, convert to uppercase and append to result string
            swappedStr += str[i].toUpperCase();
        }
    }

    // Return the swapped string
    return swappedStr;
}

// Test the function
const inputStr = 'The Quick Brown Fox';
const outputStr = swapCase(inputStr);
console.log(outputStr); // Output: 'tHE qUICK bROWN fOX'
