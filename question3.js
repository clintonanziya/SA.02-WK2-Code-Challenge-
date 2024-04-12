// If the number is divisible by any of the prime numbers less than its square root, it is not a prime number; otherwise, it is prime.
function primeOrNot(num){
    // Numbers less or equal to 1 are not prime
    if (num <= 1){
        return false;
    }
    // Check the divisibility
for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0){
        return false;
     }
    }
    return true;
}

function primeFilter(originalArray){
    // Initialize an empty array to store the generated numbers
    const newArray = [];
    // Creating the array of prime numbers
    for(const num of originalArray){
        if (primeOrNot(num)){
            newArray.push(num);
        }
    }
    return newArray
}
// Example usage
const originalArray  = [1,2,3,4,5,6,7,8,9,10]
console.log(primeFilter(originalArray));
