function count_zero(str){
    let zeroCount = 0;

    for(let i=0; i< str.length; i++){
        if(str[i] === '0'){
            zeroCount++;
        }      
    } 
    return zeroCount;
    
    
}

const countResult = count_zero("1010010100")
console.log(countResult)


// working with for of

function count_zero1(str){
    let zeroCount1 = 0;
    for(let zero of str){
        if(zero === "0"){
            zeroCount1++;
        }
    }
    return zeroCount1;
}

const countResult1 = count_zero1('1010010100')
console.log(countResult1)