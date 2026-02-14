// input এ যা লিখবে
// button click করলে সেটা h1 এ show হবে



const changeBtn = document.getElementById('changeBtn');
const title = document.getElementById("title");
const inputField = document.getElementById('inputField');



changeBtn.addEventListener("click" , function(){

    if(inputField.value.trim() != ''){
        const value = inputField.value;
        title.innerText = value;
    }else{
        alert('input text');
    }
    
})