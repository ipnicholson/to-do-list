const lis = document.querySelectorAll('li'); // Select li items
lis.forEach(li => li.addEventListener('click', completeItem)); // Listen for click on li items

// const addItem = document.querySelector('#addItem'); // Select + button
// addItem.addEventListener('click', createItem); // Listen for click on + button

const input = document.querySelector('input[type="text"]');
input.addEventListener('keydown', createItem);

const deleteButton = document.querySelectorAll('span'); // Select delete spans
deleteButton.forEach(button => button.addEventListener('click', deleteItem)); // Listen for clicks on delete buttons

// Mark li complete by adding class
function completeItem() {
  this.classList.toggle('complete');
}

// Delete li
function deleteItem(event) {
  this.parentNode.remove();
  event.stopPropagation();
  // TO FIX - needs fadeout behavior
}

// Create li
function createItem(event) {
  if (event.keyCode === 13) {
    // Initialize variable from text input, clear input
    const todoText = this.value;
    const newLi = document.createElement('li');
    newLi.innerHTML = `<span>X</span> ${todoText}`;
    this.value = '';
    // Create new li and add to ul
    const ul = document.querySelector('ul');
    ul.appendChild(newLi);
    // TO FIX: needs event listener for delete
  }
}


