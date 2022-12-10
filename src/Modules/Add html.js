// Tasks container elelement
export const listElement = document.querySelector('#list-items')

// Dynamically generate task html
export default (description, completed, index) => {
  let check = '';
  if (completed === true) { check = 'checked' }
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.id = index;
  newItem.innerHTML = `<input type="checkbox" ${check}> <textarea style = "display:block">${description}</textarea> <span class = "grip"><i class="bi bi-three-dots-vertical"></i></span> <i class="bi bi-trash3 delete hide" onmouseover="style.display='block'; this.previousElementSibling.style.display='none'"></i>`;
  listElement.appendChild(newItem);
};
