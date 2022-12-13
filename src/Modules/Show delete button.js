// Display delete icon
export const taskField = (element) => element.parentElement.classList.toggle('focused');

export const displayDelete = (element) => {
  element.parentElement.querySelector('.delete').classList.toggle('hide');
  element.parentElement.querySelector('.grip').classList.toggle('hide');
}