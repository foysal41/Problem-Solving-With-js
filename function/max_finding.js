function getMax(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

const result =  getMax(4, 5)
console.log(result)


const kim = 86;
const tim = 80;
const jim = 56;

if(kim > tim && kim > jim){
    console.log("Kim is the ultimate boss")
}else if(kim >kim && tim > jim){
    console.log("Tim is boss")
}else{
    console.log("jim is big")
}


//-----Kim, Jim, Tim in function


function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3 ){
        
        return "Num 1 one ultimate max"

    }else if(num2> num1 && num2 > num3){
        return "Num 2 is the boss"
    }else{
        return " Num 3 is the kardashians boss"
    }
}

const result_max = maxOfThree(40, 50, 60);
console.log(result_max)



// Max finding with builtin function of js
const max = Math.max(12, 3, 55);
console.log(max)