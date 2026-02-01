function evenOdd(value){
    if(value % 2 == 0){
       let divi=  value / 2;
       return divi;
    }else{
       let multi =  value * 2;
       return multi;
    }
   
}

const result = evenOdd(5);
console.log(result);