/* @jest-environment jsdom */

import updateTasks from '../Modules/Update task.js';
import { tasks } from '../Modules/Storage.js';
import deleteTask from '../Modules/Delete task.js';

jest.mock(tasks);

document.body.innerHTML = `<main>
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

describe('Update html and store data for new tasks', () => {
  test('Add items to html dom and update tasks array', () => {
    updateTasks('Clean my workspace');
    expect(tasks).toEqual([{ description: 'Clean my workspace', completed: false, index: 0 }]);
  });
});

describe('Splice respective element from the tasks array', () => {
  const mockElement = '<li class="item" id="0"><input type="checkbox"> <textarea style="display:block">Clean my workspace</textarea> <i class="bi bi-three-dots-vertical grip"></i> <i class="bi bi-trash3 delete hide"></i></li>';
  document.querySelector('ul').innerHTML = mockElement;
  test('Splice task index in array based on its index in parent node', () => {
    deleteTask(mockElement);
    expect(tasks.length).toEqual(0);
  });
});
