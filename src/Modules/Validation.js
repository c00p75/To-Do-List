import {tasks} from './Storage.js';

// Check for blank and duplicate submissions
export default (description) => {
  const duplicate = tasks.some((item) => description.value.toLowerCase() === item.description.toLowerCase());
  if (description.value === '') { return alert("Input field empty"); }
  if (duplicate) { return alert("Task already exists"); }
  return true;
};
