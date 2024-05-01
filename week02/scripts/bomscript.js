const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');


li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener("click", function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');  
    }
    else {
        input.focus();
    }
})

deleteButton.addEventListener("click", function() {
    list.removeChild(li);
    input.focus();
    input.value = '';
})