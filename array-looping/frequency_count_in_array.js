

function findRepeatNumber(numbers, input){
    
    let countNumber =0; 

    for(let number of numbers){
       if(number === input){
        countNumber++;
       }
        
    }

    return countNumber;
}


const info = findRepeatNumber([5,6,11,12,98, 5] , 5);
console.log(info)