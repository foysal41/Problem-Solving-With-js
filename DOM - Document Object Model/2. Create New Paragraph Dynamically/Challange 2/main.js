

const container = document.getElementById("cardContainer");
container.style.display = 'flex';
container.style.gap = '20px';
container.style.justifyContent = 'center';
container.style.height = '100vh';
container.style.alignItems = 'center';



for(let i=1; i<4; i++){
const card = document.createElement('div');
card.style.width = '250px';
card.style.textAlign = 'center';



const image = document.createElement('img');
image.src = 'https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg';
image.style.width = '256px';
image.style.height = '256px';
card.appendChild(image);


const title = document.createElement('h3');
title.innerText = 'Item One';
title.style.fontSize = "25px";
title.style.margin = '5px ';
card.appendChild(title);

const button = document.createElement('button');
button.innerText = 'Click Me';
button.style.padding = '15px 30px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
button.style.border = 'none'
card.appendChild(button);



container.appendChild(card);


}
