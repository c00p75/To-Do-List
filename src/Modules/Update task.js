import { storeData, tasks } from './Storage.js';
import { addTasks } from './Add html.js';

// Update html and store data for new tasks
export default (description, completed = false, index = tasks.length) => {
  tasks.push({ description, completed, index });
  addTasks(description, completed, index);
  storeData();
};
