const products = [
  { name: 'shampoo', price: 300 },
  { name: 'chiruni', price: 100 },
  { name: 'shirt', price: 700 },
  { name: 'pant', price: 1200 }
];


function getShoppingTotal(products){

    let total = 0;
    for(let product of products){
          total = product.price + total;
    }

    return total;
}

const result = getShoppingTotal(products)
console.log(result)