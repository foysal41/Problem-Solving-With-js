function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please prove a number'
    }

    const mult = num1 * num2;
    return mult;
}

const result = multiply(4, 7);
console.log(result);








// array object

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return "Please provide an array"
    }
    const second = numbers[1]
    return second;

}


const second = getSecond([1, 2, 33, 56])
console.log(second);