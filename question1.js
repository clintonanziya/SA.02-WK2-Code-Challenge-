//Naming the function
function swapCase(inputString) {
    // Declaring the empty variables
    let result = "";
    // Separating the input into individual characters
    for (let i = 0; i < inputString.length; i++) { 
        const letter = inputString[i]; 
        // Swapping the cases of the individual Characters
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }
    return result;
}

//Example  Usage
console.log(swapCase("The Quick Brown Fox"));
