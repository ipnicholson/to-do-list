// const addItem = document.querySelector('#addItem'); // Select + button
// addItem.addEventListener('click', createItem); // Listen for click on + button

const input = document.querySelector('input[type="text"]');
input.addEventListener('keydown', createItem);

const ul = document.querySelector('ul'); // Select ul
ul.addEventListener('click', helper('span', deleteItem)); // Listen for clicks on delete buttons
ul.addEventListener('click', helper('li', completeItem));

// Mark li complete by adding class
function completeItem() {
  this.classList.toggle('complete');
}

// Delete li
function deleteItem(event) {
  this.parentNode.remove();
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

// Helper function for event delegation
function helper(selector, handler) {
  return function(event) {
    var targ = event.target;
    do {
      if (targ.matches(selector)) {
        handler.call(targ, event);
      }
    } while ((targ = targ.parentNode) && targ != event.currentTarget);
  }
}