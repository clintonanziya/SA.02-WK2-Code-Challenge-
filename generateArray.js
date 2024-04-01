function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers
    let result = [];

    // Determine the direction of the range (positive or negative)
    const step = start < end ? 1 : -1;

    // Iterate from the start number to the end number, inclusive
    for (let i = start; i !== end + step; i += step) {
        // Push the current number to the result array
        result.push(i);
    }

    // Return the generated array
    return result;
}

// Test cases
console.log(generateArray(4, 7));  // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]