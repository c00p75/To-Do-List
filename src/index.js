import _ from 'lodash';
import './style.css';

const listElement = document.querySelector('#list-items');
const tasks = [
  {completed: false, description:"Walk", index:0},
  {completed: false, description:"study", index:0},
  {completed: false, description:"play", index:0},
  {completed: false, description:"clean", index:0}
];

const addTasks = (description) => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.innerHTML = `<input type="checkbox"> <textarea>${description}</textarea> <span class = "grip"><i class="bi bi-three-dots-vertical"></i></span>`;
  listElement.appendChild(newItem);
};

const retriveData = () => {
  tasks.forEach((item) => addTasks(item.description));
}

const updateTasks = (description, completed = false, index = tasks.length) => {
  tasks.push({ description: description, completed: completed, index: index });
  addTasks(description);
};

const validation = (description) => {
  if (description.value === '') { return false }
  return true;
};

const clearField = (element) => { element.value = ''; };

document.querySelector('DOMContentLoaded', retriveData());

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input =  document.querySelector('#item-input');
  if (validation(input)) { updateTasks(input.value) }
  clearField(input);
  console.log(tasks)
});
