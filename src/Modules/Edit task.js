import {storeData, tasks} from './Storage.js';

// Store value of edited task
export default (element) => {
  const parent = element.parentElement;
  tasks[parent.id].description = element.value;
  element.blur()
  storeData();
}
