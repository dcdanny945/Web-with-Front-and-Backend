// const form = document.getElementById('toDoForm');
//     const itemBox = document.querySelector('.items.box');

//     form.addEventListener('submit', function(event) {
//         // Prevent default form submission
//         event.preventDefault();
//         const newItemValue = document.getElementById('newItem').value;

//         const newItem = document.createElement('div');
//         newItem.classList.add('item');
//         newItem.textContent = newItemValue;

//          // Append the new item to the item box
//          itemBox.appendChild(newItem);

//          // Clear the input field
//          document.getElementById('newItem').value = '';
//      });


const form = document.querySelector('#toDoForm');
const input = document.querySelector('input');
const ul = document.querySelector('#workOutList'); 

function createListItems(inputValue) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = inputValue;
    // const label = document.createElement('label');
    // label.textContent = " Done!";
    // const checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';
    // const editBtn = document.createElement('button');
    // editBtn.textContent = 'edit';
    // // const removeBtn = document.createElement('button');
    // // removeBtn.textContent = 'remove';

    checkbox.addEventListener("change",(event) => {
      if(checkbox.checked){
        li.style.textDecoration = "line-through";
      }else{
        li.style.textDecoration = 'none';
      }


    })

    li.appendChild(checkbox);
    li.appendChild(span);
    // li.appendChild(label);
    // label.appendChild(checkbox);
    
    li.appendChild(editBtn);
    // li.appendChild(removeBtn);

    return li;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = input.value;
    if (inputValue === '') {
        alert('Please enter an exercise');
    } else {
        const li = createLi(inputValue);
        ul.appendChild(li);
        input.value = ''; // 清空輸入字段
    }
});