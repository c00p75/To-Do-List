// Display delete icon
export default (element) => {
  element.parentElement.classList.toggle('focused');
  element.parentElement.children[3].classList.toggle('hide');
  element.parentElement.children[2].classList.toggle('hide')
}
