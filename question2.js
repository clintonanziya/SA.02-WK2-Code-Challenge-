function arrayGenerator(num1,num2){
     // Initialize an empty array to store the generated numbers
    const array = [];
    // Check if num1 is less or equal to num2
    if (num1 <= num2){
        for (let i=num1; i<=num2; i++){
             // Push each number to the array
            array.push(i)
        }
    // Check if num1 is less or equal to num2
    } else{
        for(let i=num1; i>=num2;i--){

            // Push each number to the array
            array.push(i)
        }
    }
    //Return the generated array
    return array;
}
// Example usage
console.log(arrayGenerator(4,7));
console.log(arrayGenerator(-4,7));
