// height

const height =[65, 66, 68, 72, 40, 65, 66]

function getMax(numbers){
    let maxNumber = [0]
    for(let num of numbers){
        if(num > maxNumber){
            maxNumber = num
        }
    }

    return maxNumber;
}

const result = getMax(height)
console.log(result)



// Get Min 

const height_number =[65, 66, 68, 72, 40, 65, 66]

function getMin(numbers){
    let minNumber = numbers[0];

    for(let num of numbers){
        if( num < minNumber){
            minNumber = num;
        }
    }

    return minNumber;
}

const results = getMin(height_number)
console.log(results)
