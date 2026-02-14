// User input এ টাইপ করছে then input event trigger হচ্ছে

// আমরা check করলাম value empty কিনা

// Empty না হলে → h1 change

// Empty হলে → default text ফিরে আসছে


const inputField = document.getElementById("inputField");
const text = document.getElementById("title");
const defaultText = text.innerText;



inputField.addEventListener('keydown' , function(){
    if(inputField.value !== ''){
        const value = inputField.value;
    text.innerText = value;
    }else{
        text.innerText = defaultText;
    }
})