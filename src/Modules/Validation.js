import { tasks } from './Storage.js';

// Check for blank and duplicate submissions
export default (description) => {
  const duplicate = tasks.some((item) => description.value.toLowerCase() === item.description.toLowerCase());
  if (description.value === '') { document.getElementById('error').innerHTML = 'Please give input...'; }
  if (duplicate) { document.getElementById('error').innerHTML = 'Please give input...'; }
  return true;
};
