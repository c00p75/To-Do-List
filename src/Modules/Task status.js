// Add 'line-through' property to checked tasks
export default (element) => {
  if (element.checked) { 
    element.nextElementSibling.classList.add('checkedTask') 
  } else { element.nextElementSibling.classList.remove('checkedTask')  }
}
