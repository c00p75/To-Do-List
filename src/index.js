import _ from 'lodash'; // eslint-disable-line
import './style.css';
import { listElement } from './Modules/Add html.js';
import { retrieveData, clearCompletedTasks, updateTaskArray } from './Modules/Storage.js';
import validation from './Modules/Validation.js';
import updateTasks from './Modules/Update task.js';
import deleteTask from './Modules/Delete task.js';
import checkBox from './Modules/Check box.js';
import editTasksField from './Modules/Edit task.js';
import { taskField, displayDelete } from './Modules/Show delete button.js';
import { showModal, clear } from './Modules/Clear tasks.js';
import dragNdrop from './Modules/Drag-n-drop.js';

// DOM load evenet listener
document.querySelector('DOMContentLoaded', retrieveData());

document.querySelector('form input').addEventListener('focusout', (event) => {
  event.target.setAttribute('Placeholder', 'Add to your list...');
  event.target.classList.remove('error');
});

// Tasks submit event listener
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#item-input');
  if (validation(input)) { updateTasks(input.value); }
  input.value = '';
});

// Delete button and Checkbox event listeners
listElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) { deleteTask(event.target.parentElement); }
  if (event.target.nodeName === 'INPUT') { checkBox(event.target); }
});

// Enter button in text-area event listener
listElement.addEventListener('keydown', (event) => {
  if (event.target.nodeName === 'TEXTAREA') {
    if (event.key === 'Enter') {
      event.preventDefault();
      editTasksField(event.target);
    }
  }
});

// Text-area Focus out event listener
listElement.addEventListener('focusout', (event) => {
  if (event.target.nodeName === 'TEXTAREA') {
    editTasksField(event.target);
    taskField(event.target);
    setTimeout(() => {
      displayDelete(event.target);
    }, 150);
  }
});

// Text-area Focus in event listener
listElement.addEventListener('focusin', (event) => {
  if (event.target.nodeName === 'TEXTAREA') {
    taskField(event.target);
    displayDelete(event.target);
  }
});

// Clear all completed tasks button event listener
document.querySelector('.clear-all').addEventListener('click', () => clearCompletedTasks());

// Create new To-Do list button event listener
document.querySelector('.rotate').addEventListener('click', () => showModal());

// Modal event listener
document.querySelector('#modal').addEventListener('click', (event) => clear(event.target));

// Call drag and drop function
dragNdrop();

// Add drag end event listener
document.querySelector('#list-items').addEventListener('dragend', () => { updateTaskArray(); });

// Add touch end event listener for touch screens
document.querySelector('#list-items').addEventListener('touchend', (event) => {
  if (event.target.nodeName === 'I') {
    setTimeout(() => updateTaskArray(), 100);
  }
});