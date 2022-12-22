import { addTasks, listElement } from './Add html.js';
import taskStatus from './Task status.js';

// Declare tasks array
export let tasks = []; // eslint-disable-line

// Retrieve data from local storage
export const retrieveData = () => {
  const stored = localStorage.getItem('To-do tasks');
  if (stored !== null) { tasks = JSON.parse(stored); }
  document.querySelector('#list-items').innerHTML = '';
  tasks.forEach((item) => addTasks(item.description, item.completed, item.index));
  document.querySelector('#list-items').childNodes.forEach((item) => taskStatus(item.childNodes[0]));
};

// Store data in local storage
export const storeData = () => {
  tasks.forEach((item) => { item.index = tasks.indexOf(item); });
  localStorage.setItem('To-do tasks', JSON.stringify(tasks));
};

// Clear all completed tasks
export const clearCompletedTasks = () => {
  tasks = tasks.filter((item) => item.completed === false);
  storeData();
  retrieveData();
};

// Create new to do list
export const newToDo = () => {
  listElement.innerHTML = '';
  tasks = [];
  storeData();
};

// Update task array
export const updateTaskArray = () => {
  tasks = [];
  const li = Array.from(document.querySelector('#list-items').children);
  li.forEach((item) => {
    const description = item.querySelector('textarea').innerHTML;
    const completed = item.querySelector('input').checked;
    const index = li.indexOf(item);
    tasks.push({ description, completed, index });
  });
  storeData();
  retrieveData();
};
