/* 
up to 100: --> 100
more than 101 - 200: --> 90
more than 200 : --> 70 
*/


function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100
        return total;
    }else if(quantity <= 200){
        const total = quantity * 90
        return total;
    }else{
        const total = quantity * 70;
        return total;
    }
}


const result = discountPrice(191)
console.log(result);





// laywerd Discount
function layeredDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal  = remainingQuantity * second100Price

        const total = first100Total + remainingTotal
        return total;
    }else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price
        const total = first100Total + second100Total+ remainingTotal

        return total;
    }
}