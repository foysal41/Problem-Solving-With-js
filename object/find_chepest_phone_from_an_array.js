const mobiles = [
  { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
  { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
  { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
  { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
  { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
  { name: 'HTC', price: 27000, camera: '12mp', color: 'black' }
];


function getCheapestMobile(mobiles){

  let cheapPhone = mobiles[0];
  for(let mobile of mobiles){
    if(mobile.price < cheapPhone.price){
      cheapPhone = mobile;
    }
  }

  return cheapPhone;
  
}


const cheap = getCheapestMobile(mobiles)
console.log(cheap)