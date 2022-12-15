/* @jest-environment jsdom*/
/* eslint-disable */

import {tasks, clearCompletedTasks} from '../Modules/Storage.js';
import updateTasks from '../Modules/Update task.js';
import editTasksField from '../Modules/Edit task.js';
import checkBox from '../Modules/Check box.js';


jest.mock(tasks);

document.body.innerHTML =
`<main>
  <div id="list-container">
    <div class="item"><h1 id="title">Today's To-Do list</h1> <button class="rotate"><i class="bi bi-arrow-repeat"></i></button></div>
    <div class="add-item">
      <form action="" id="add" class="item">
        <input type="text" id="item-input" placeholder="Add to your list...">
        <button type="submit" id="submit"> <i class="bi bi-arrow-return-left"></i> </button>
      </form>
    </div>
    <ul id="list-items"></ul>
    <button class="clear-all">Clear all completed</button>
  </div>
</main>`;
  
//Add new task to tasks array and to the HTML DOM
updateTasks('Exercise for 1 hour'); 

describe('Edit task description in html and tasks array for already existing tasks tasks', () => {
  // Select task element which contains task description
  const taskDescription = document.querySelector('ul li textarea');

  // Modify task description
  taskDescription.innerHTML= 'Sleep for 2 hours';

  // Call fuction created to store edited data
  editTasksField(taskDescription);

  test ('Update task array description for edited task', () => {
    expect(tasks[0].description).toBe('Sleep for 2 hours')
  })
});

describe("Update a tasks' completed status.", () => {
  // Select checkbox element
  const taskChecbox = document.querySelector('ul li input');

  // Assign checked attribute to checkbox
  taskChecbox.setAttribute('checked', 'checked');

  // Call functioned responsible for updating checked status
  checkBox(taskChecbox)

  test ("Update task's completion status", () => {
    expect(tasks[0].completed).toBe(true)
  })
})

describe("Update a tasks' completed status.", () => {
  // Add two other items to list
  updateTasks('Buy groceries', true);     //Item completed status set to true
  updateTasks('Change kitty litter');     //Item completed status has default value of false
  
  test('Clear all completed tasks', () => {
    clearCompletedTasks();
    expect(tasks.length).toBe(1)
  })
})