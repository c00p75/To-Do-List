import {storeData, tasks} from './Storage.js';

// Store value of edited task
export default (element) => {
  const parent = element.parentElement;
  console.log(element.value, parent.id, tasks[parent.id])
  tasks[parent.id].description = element.value;
  element.blur()
  storeData();
}
