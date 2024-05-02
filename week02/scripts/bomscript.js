const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');




button.addEventListener("click", function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.append(li);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; 
        li.append(deleteButton); 
        input.value = '';
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        })
    }
    else {
        input.focus();
    }
})

