function  make_avg(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    getAvg = sum / arr.length;
    return getAvg;
}

const avg_result = make_avg([2, 5, 6,7,8])
console.log(avg_result);