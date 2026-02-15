const heading = document.getElementById('heading')
const inputFiled = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const taskList = document.getElementById('todoList');

btn.addEventListener('click' , function(){
    const inputValue = inputFiled.value.trim();
    if(inputValue !== ''){
        const list = document.createElement('li');
        list.style.margin = '10px 0';
        list.innerHTML = `<span>${inputValue}</span>
                        <button class="deleteBtn">Delete</button>`
        taskList.appendChild(list);
        inputFiled.value = "";

        list.addEventListener('click' , function(event){
            if(event.target.tagName === 'SPAN'){
                event.target.style.textDecoration = "line-through";
                event.target.style.color = "green";
            }

            if(event.target.classList.contains("deleteBtn")){
                event.stopPropagation();
                event.target.parentElement.remove();
            }

            
        })
        
    }else{
        alert('input field is blank');
    }
})