const multiselect = document.querySelector('.multiselect');
const button = multiselect.querySelector('.multiselect-button');
const options = multiselect.querySelector('.multiselect-options');

button.addEventListener('click', (e) => {
    e.preventDefault()
  multiselect.classList.toggle('active');
});

options.addEventListener('click', (event) => {
  const checkbox = event.target.closest('input[type="checkbox"]');
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
  }
});