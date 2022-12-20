import { newToDo, tasks } from './Storage.js';

export const showModal = () => {
  if (tasks.length === 0) { return; }
  document.querySelector('#modal-bg').classList.toggle('hide');
  document.querySelector('#modal').classList.toggle('hide2');
};

export const clear = (element) => {
  if (element.id === 'yes') {
    showModal();
    newToDo();
  } else if (element.id === 'no' || element.id === 'close') {
    showModal();
  }
};