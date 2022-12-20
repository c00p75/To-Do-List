import { tasks } from './Storage.js';

// Input element
const inputElement = document.querySelector('form input');

// Check for blank and duplicate submissions
export default (description) => {
  const dup = tasks.some((i) => description.value.toLowerCase() === i.description.toLowerCase());
  if (description.value === '') {
    inputElement.setAttribute('Placeholder', 'Empty field');
    inputElement.classList.add('error');
    return false;
  }

  if (description.value !== '') {
    inputElement.setAttribute('Placeholder', 'Add to your list...');
    inputElement.classList.remove('error');
  }

  if (dup) {
    inputElement.setAttribute('Placeholder', 'Duplicate task');
    inputElement.classList.add('error');
    return false;
  }

  if (!dup) {
    inputElement.setAttribute('Placeholder', 'Add to your list...');
    inputElement.classList.remove('error');
  }

  return true;
};
