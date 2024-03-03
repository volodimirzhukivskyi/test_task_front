const multiselect = document.querySelector('.multiselect');
const button = multiselect.querySelector('.multiselect-button');
const options = multiselect.querySelector('.multiselect-options');
options.addEventListener('click', (event) => {
  const checkbox = event.target.closest('input[type="checkbox"]');

  if (checkbox) {
    console.log(checkbox.checked);
    checkbox.checked = checkbox.checked;
  }
});
button.addEventListener('click', (e) => {
  e.preventDefault();
  multiselect.classList.toggle('active');
});
