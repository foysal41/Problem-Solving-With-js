

const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click" , function(){
    const newPara = document.createElement('p');
    newPara.innerText = 'hello';

    container.appendChild(newPara)
})