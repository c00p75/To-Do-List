// Display delete icon
export default (element) => {
  element.parentElement.classList.toggle('focused');
  element.parentElement.querySelector('.grip').classList.toggle('hide');
  element.parentElement.querySelector('.delete').classList.toggle('hide')
}
