// Add 'line-through' property to checked tasks
const taskStatus = (element) => {
  if (element.checked) {
    element.nextElementSibling.classList.add('checkedTask');
  } else { element.nextElementSibling.classList.remove('checkedTask'); }
};

export default taskStatus;