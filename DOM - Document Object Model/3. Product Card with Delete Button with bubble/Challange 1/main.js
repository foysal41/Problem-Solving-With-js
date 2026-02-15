

// Real world এ:

// E-commerce site ,  Dashboard list , Notification panel , Modal box, সব জায়গায় bubbling control লাগে।


const productContainer = document.getElementById("productContainer");



for(let i=1; i<=3; i++){
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    productContainer.appendChild(divCard);


    const headingCard = document.createElement('h3');
    headingCard.innerText = 'Product Name';
    divCard.appendChild(headingCard);


    const btn = document.createElement('button');
    btn.classList.add('deleteBtn');
    btn.innerText = 'Delete';

    divCard.appendChild(btn);



    divCard.addEventListener('click' , function(){
        console.log('you have clicked the div');
    })

    btn.addEventListener('click' , function(e){
        e.stopPropagation();
        
        divCard.remove();
        alert("Product is deleted");

    })




}
