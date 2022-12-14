import {storeData, tasks, retrieveData} from './Storage.js';

// Delete task from array
export default (element) => {
  const parrentIndex = Array.from(document.querySelector('#list-items').children).indexOf(element);
  tasks.splice(parrentIndex, 1);
  storeData();
  retrieveData()
  return tasks
}
