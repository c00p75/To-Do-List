// Tasks container elelement
export const listElement = document.querySelector('#list-items')

// Dynamically generate task html
export default (description, completed, index) => {
  let check = '';
  if (completed === true) { check = 'checked' }
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.id = index;
  newItem.innerHTML = `<input type="checkbox" ${check}> <textarea style = "display:block">${description}</textarea> <i class="bi bi-three-dots-vertical grip"></i> <i class="bi bi-trash3 delete hide"></i>`;
  document.querySelector('#list-items').appendChild(newItem);
};
