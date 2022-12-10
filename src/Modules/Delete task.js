import {storeData, tasks, retrieveData} from './Storage.js';
import {listElement} from './Add html.js';

// Delete task from array
export default (element) => {
  const parent = element.parentElement;
  const parrentIndex = Array.from(listElement.children).indexOf(parent);
  tasks.splice(parrentIndex, 1);
  storeData();
  retrieveData()
}
