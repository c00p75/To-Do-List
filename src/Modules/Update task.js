import {storeData, tasks} from './Storage.js';
import {default as addTasks} from './Add html.js';

// Update html and store data for new tasks
export default (description, completed = false, index = tasks.length) => {
  tasks.push({ description, completed, index });
  storeData()
  addTasks(description, completed, index);
};
