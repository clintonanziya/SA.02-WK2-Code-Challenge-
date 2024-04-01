function isPrime(num) {
    // 1 and numbers less than 1 are not prime
    if (num <= 1) {
        return false;
    }
    // Check for divisibility from 2 to square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(arr) {
    // Initialize an empty array to store prime numbers
    const primeNumbers = [];

    // Iterate through the input array
    for (let num of arr) {
        // Check if the number is prime using the isPrime function
        if (isPrime(num)) {
            // If prime, add it to the primeNumbers array
            primeNumbers.push(num);
        }
    }

    // Return the array containing only prime numbers
    return primeNumbers;
}

// Test case
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPrimeNumbers(numbers)); // Output: [2, 3, 5, 7]
