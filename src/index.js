import _ from 'lodash'; // eslint-disable-line
import './style.css';

const listElement = document.querySelector('#list-items');
const tasks = [
  { completed: false, description: 'Walk the dog', index: 3 },
  { completed: false, description: 'Study', index: 0 },
  { completed: false, description: 'Complete a coding challenge', index: 1 },
  { completed: false, description: 'Clean my workspace', index: 2 },
];

const addTasks = (description) => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.innerHTML = `<input type="checkbox"> <textarea onfocus="parentElement.style.backgroundColor='rgb(255, 254, 202)';" onfocusout="parentElement.style.backgroundColor='white';">${description}</textarea> <span class = "grip"><i class="bi bi-three-dots-vertical"></i></span>`;
  listElement.appendChild(newItem);
};

const retriveData = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((item) => addTasks(item.description));
};

const updateTasks = (description, completed = false, index = tasks.length) => {
  tasks.push({ description, completed, index });
  addTasks(description);
};

const validation = (description) => {
  if (description.value === '') { return false; }
  return true;
};

const clearField = (element) => { element.value = ''; };

document.querySelector('DOMContentLoaded', retriveData());

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#item-input');
  if (validation(input)) { updateTasks(input.value); }
  clearField(input);
});
