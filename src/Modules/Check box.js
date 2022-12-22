import { storeData, tasks } from './Storage.js';
import taskStatus from './Task status.js';

// Store checkbox value
export default (element) => {
  element.setAttribute('checked', element.checked);
  const parent = element.parentElement;
  tasks[parent.id].completed = element.checked;
  taskStatus(element);
  storeData();
};
