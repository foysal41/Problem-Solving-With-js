function woodQuantity(chair, table, bed){
    const parChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = parChairWood * chair;
    const tableTotalWood = perTableWood * table;
    const bedTotalWood = perBedWood * bed;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const result = woodQuantity(0, 0, 2);
console.log(result)



// Another same type problem solving

function clothQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const current_Price_of_Shirt = 500;
    const current_Price_of_Pant = 300;
    const current_Price_of_Shoe = 900; 

    const total_shirt_price = current_Price_of_Shirt * shirtQuantity;
    const total_pant_price = current_Price_of_Pant * pantQuantity;
    const total_shoe_price = current_Price_of_Shoe * shoeQuantity;

    const total_cloth_of_sum = total_shirt_price + total_pant_price + total_shoe_price;
    return total_cloth_of_sum;
}


const result_cloth = clothQuantity(2, 2, 1);
console.log(result_cloth)