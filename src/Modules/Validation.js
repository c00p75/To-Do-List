import { tasks } from './Storage.js';

// Check for blank and duplicate submissions
export default (description) => {
  const dup = tasks.some((i) => description.value.toLowerCase() === i.description.toLowerCase());
  if (description.value === '') { document.getElementById('error').innerHTML = 'Please give input...'; }
  if (dup) { document.getElementById('error').innerHTML = 'Please give input...'; }
  return true;
};
