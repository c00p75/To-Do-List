import {default as  addTasks, listElement} from './Add html.js';
import {default as taskStatus} from './Task status.js';

// Declare tasks array
export let tasks = [];

// Retrieve data from local storage
export const  retrieveData =  () => {
  const stored = localStorage.getItem('To-do tasks');
  if (stored !== null) { tasks = JSON.parse(stored); }
  // tasks.sort((a, b) => a.index - b.index);
  listElement.innerHTML = '';
  tasks.forEach(item => addTasks(item.description, item.completed, item.index));
  listElement.childNodes.forEach(item => taskStatus(item.childNodes[0]));
};


// Store data in local storage
export const storeData = () => {
  tasks.forEach((item) => { item.index = tasks.indexOf(item) });
  localStorage.setItem('To-do tasks', JSON.stringify(tasks))
};

// Clear all completed tasks
export const clearCompletedTasks = () => {
  if (tasks.length === 0) { return alert("Task list is empty"); }
  if (!tasks.some((item) => item.completed === true)) {return alert("No complete tasks");}
  tasks = tasks.filter(item => item.completed === false);
  storeData();
  retrieveData()
 }

// Create new to do list
export const newToDo = () => {
  listElement.innerHTML = '';
  tasks = [];
  storeData();
  alert("Task list empty");
 }
